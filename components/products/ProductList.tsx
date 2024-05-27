import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Product } from "../../@types/Product";
import { useState } from 'react';

type ProductListProps = {
    products: Product[]
    onProductSelected: any,
    onProductDeleted: any
}

export default function ProductList({ products, onProductSelected, onProductDeleted }: ProductListProps) {

    const [pesquisa, setPesquisa] = useState('');

    let filteredProducts = [];

    if (pesquisa !== '') {

        const normalizedSearch = pesquisa.trim().toLowerCase();

        filteredProducts = products.filter(product => {
            return product.nome!.toLowerCase().includes(normalizedSearch)
                || product.preco!.toLowerCase().includes(normalizedSearch);
        });
    } else {
        filteredProducts = [...products];
    }

    return (
        <>
            <ScrollView className="bg-slate-100">
                <View className="p-6 flex-row items-center justify-between">
                    <Text className="text-3xl font-bold">Produtos</Text>
                    <Ionicons name='add-circle' size={32}
                        onPress={() => onProductSelected()} />
                </View>

                <View className="px-6 mb-6">
                    <TextInput className="rounded-xl shadow-xl bg-white p-4 placeholder:opacity-50" placeholder="Pesquisar produto..."
                        onChangeText={(value) => setPesquisa(value)} />
                </View>

                <View className="px-6 gap-6">
                    {filteredProducts.length === 0 ? <Text className="text-center text-lg font-semibold">Nenhum produto foi encontrado!</Text> : filteredProducts.map(product => {
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