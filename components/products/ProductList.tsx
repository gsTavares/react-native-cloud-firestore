import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Product } from "../../@types/Product";

type ProductListProps = {
    products: Product[]
    onProductSelected: any,
    onProductDeleted: any
}

export default function ProductList({products, onProductSelected, onProductDeleted}: ProductListProps) {

    return (
        <>
            <ScrollView className="bg-slate-100">
                <View className="p-6">
                    <Text className="text-3xl font-bold">Produtos</Text>
                </View>

                <View className="px-6 mb-6">
                    <TextInput className="rounded-xl shadow-xl bg-white p-4" placeholder="Pesquisar produto..." />
                </View>

                <View className="px-6 gap-6">
                    {products.map(product => {
                        return (
                            <View key={product.id!} className="p-6 bg-blue-400 rounded-xl relative">
                                <View>
                                    <Text className="text-lg font-semibold text-white capitalize">{product.nome}</Text>
                                    <Text className="text-sm font-semibold text-white mt-3">{product.preco}</Text>
                                </View>
                                <View className="absolute flex-row bottom-0 right-0">
                                    <TouchableOpacity className="bg-yellow-400 p-3 rounded-tl-xl" activeOpacity={0.8}
                                        onPress={() => onProductSelected(product)}>
                                        <Ionicons name="pencil-outline" size={20} color={colors.white} />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="bg-red-400 p-3 rounded-br-xl" activeOpacity={0.8}
                                        onPress={() => onProductDeleted(product)}>
                                        <Ionicons name="trash-bin-outline" size={20} color={colors.white} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}

                </View>
            </ScrollView>
        </>
    )
}