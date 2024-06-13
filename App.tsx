import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Products from './pages/Products';

import { NativeWindStyleSheet } from "nativewind";
import Notifications from './pages/Notifications';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{ drawerLabel: 'Home' }}>
        </Drawer.Screen>
        <Drawer.Screen
          name='Produtos'
          component={Products}
          options={{ drawerLabel: 'Produtos' }}>
        </Drawer.Screen>
        <Drawer.Screen
          name='Notificações'
          component={Notifications}
          options={{ drawerLabel: 'Notificações' }}>
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
