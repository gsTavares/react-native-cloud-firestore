import { View, Text, ScrollView, TextInput } from "react-native";
import colors from 'tailwindcss/colors';

export default function Home() {
    return (
        <>
            <ScrollView className="bg-slate-100">
                <View className="p-6">
                    <Text className="text-3xl font-bold">Olá Gustavo,</Text>
                    <Text className="text-sm text-slate-400 font-semibold">O que você vai querer comprar hoje?</Text>
                </View>

                <View className="px-6">
                    <TextInput className="rounded-xl shadow-xl bg-white p-4" placeholder="Pesquisar categoria..." />
                </View>

                <View className="p-6">
                    <Text className="text-3xl font-bold">Categorias</Text>
                </View>

                <View className="px-6">
                    <View className="p-6 bg-blue-400 rounded-xl">
                        <View>
                            <Text className="text-lg font-semibold text-white">Cama, mesa e banho</Text>
                            <Text className="text-sm font-semibold text-white mt-3">45 itens</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}