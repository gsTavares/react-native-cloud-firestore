import { Text, TouchableOpacity, View } from "react-native";
import notifee from '@notifee/react-native';

export default function Notifications() {

    async function onDisplayNotification() {

        await notifee.requestPermission()

        const channelId = await notifee.createChannel({
            id: 'appCrudChannel',
            name: 'Canal de notificações do app',
        });

        await notifee.displayNotification({
            title: 'Promoção',
            body: 'Camiseta branca básica com desconto de 10% na compra de 3 unidades!',
            android: {
                channelId,
                pressAction: {
                    id: 'default',
                },
            },
        });
    }

    return (
        <View className="w-full h-full p-3 items-center justify-center">
            <TouchableOpacity activeOpacity={0.8} className="p-5 bg-blue-600 rounded-lg"
                onPress={() => onDisplayNotification()}>
                <Text className="font-bold text-white">Receber promoção</Text>
            </TouchableOpacity>
        </View>
    )
}