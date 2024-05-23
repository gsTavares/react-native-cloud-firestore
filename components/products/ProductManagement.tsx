import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Product } from "../../@types/Product";
import { cloudFirestore } from "../../firebase/firebase.config";

type ProductManagementProps = {
    product?: Product,
    onProductSaved: any
}

export default function ProductManagement({ product, onProductSaved }: ProductManagementProps) {

    const [nome, setNome] = useState(product?.nome);
    const [marca, setMarca] = useState(product?.marca);
    const [categoria, setCategoria] = useState(product?.categoria);
    const [preco, setPreco] = useState(product?.preco);

    const handleProductData = async () => {
        const productData: Product = {
            categoria: categoria,
            marca: marca,
            nome: nome,
            preco: preco
        };

        if (product?.id) {
            const productRef = doc(cloudFirestore, 'produtos', product.id);
            await updateDoc(productRef, productData);
        } else {
            await addDoc(collection(cloudFirestore, 'produtos'), productData);
        }

        onProductSaved();

    }

    return (
        <>
            <ScrollView className="bg-slate-100">
                <View className="p-6">
                    <Text className="text-3xl font-bold capitalize">{product?.nome ?? 'Novo produto'}</Text>
                </View>

                <View className="px-6">
                    <Text className="text-lg font-semibold pb-1">Nome do produto</Text>
                    <TextInput className="rounded-xl shadow-xl bg-white p-4" placeholder="Nome do produto"
                        value={nome} onChangeText={(value) => setNome(value)} />
                </View>

                <View className="px-6 mt-3">
                    <Text className="text-lg font-semibold pb-1">Marca</Text>
                    <TextInput className="rounded-xl shadow-xl bg-white p-4" placeholder="Marca"
                        value={marca} onChangeText={(value) => setMarca(value)} />
                </View>

                <View className="px-6 mt-3">
                    <Text className="text-lg font-semibold pb-1">Categoria</Text>
                    <TextInput className="rounded-xl shadow-xl bg-white p-4" placeholder="Categoria"
                        value={categoria} onChangeText={(value) => setCategoria(value)} />
                </View>

                <View className="px-6 mt-3 mb-12">
                    <Text className="text-lg font-semibold pb-1">Preço</Text>
                    <TextInput className="rounded-xl shadow-xl bg-white p-4" placeholder="Preço"
                        value={preco} onChangeText={(value) => setPreco(value)} />
                </View>

                <View className="px-6 flex-row gap-5 justify-end items-center">
                    <TouchableOpacity activeOpacity={0.8} className="bg-slate-500 p-4 rounded-xl"
                        onPress={onProductSaved}>
                        <Text className="text-white font-semibold text-center text-lg">Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} className="bg-green-500 p-4 rounded-xl"
                        onPress={handleProductData}>
                        <Text className="text-white font-semibold text-center text-lg">
                            {product?.id ? 'Atualizar' : 'Cadastrar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )

}