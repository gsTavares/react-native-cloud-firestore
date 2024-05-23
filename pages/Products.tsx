import { createStackNavigator } from '@react-navigation/stack';
import ProductList from "../components/products/ProductList";
import { useEffect, useState } from 'react';
import { Product } from '../@types/Product';
import ProductManagement from '../components/products/ProductManagement';
import { doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { cloudFirestore } from '../firebase/firebase.config';
import { View, ActivityIndicator, Platform, Alert } from 'react-native';

const Stack = createStackNavigator();

export default function Products({ navigation }: any) {

    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
    const [products, setProducts] = useState<Product[]>([]);
    const [actionFlag, setActionFlag] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getProducts = async () => {

            const querySnapshot = await getDocs(collection(cloudFirestore, "produtos"));

            const firestoreProducts: Product[] = [];

            querySnapshot.forEach((doc) => {

                const data: Product = doc.data() as Product;
                data.id = doc.id

                firestoreProducts.push(data);

            });

            setProducts(firestoreProducts);
            setLoading(false);

        }

        getProducts();

    }, [actionFlag])

    const handleProductSelected = (product: Product) => {
        setSelectedProduct(product);
        navigation.navigate('Gerenciar produto')
    }

    const handleProductExclusion = async (product: Product) => {
        if (Platform.OS === 'web') {
            const result = window.confirm(['Aviso', 'Deseja realmente excluir o produto?'].filter(Boolean).join('\n'));
            if (result) {
                await deleteDoc(doc(cloudFirestore, 'produtos', product.id!));
                setActionFlag(!actionFlag);
            } else {
                return;
            }
        } else {
            Alert.alert('Aviso', 'Deseja realmente excluir a loja?', [{
                text: 'Não',
                onPress: () => { },
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    await deleteDoc(doc(cloudFirestore, 'produtos', product.id!));
                    setActionFlag(!actionFlag);
                }
            }])
        }
    }

    const updateProductList = () => {
        setActionFlag(!actionFlag);
        navigation.navigate('Lista de produtos');
    }

    return (
        <Stack.Navigator initialRouteName="Lista de produtos" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Lista de produtos">
                {props => loading ?
                    <>
                        <View className="h-screen w-screen items-center justify-center">
                            <ActivityIndicator size={32} />
                        </View>
                    </>
                    : <ProductList products={products} onProductSelected={handleProductSelected}
                        onProductDeleted={handleProductExclusion} />}
            </Stack.Screen>

            <Stack.Screen name="Gerenciar produto">
                {props => <ProductManagement product={selectedProduct}
                    onProductSaved={updateProductList} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}