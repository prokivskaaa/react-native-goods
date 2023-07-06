import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import AddProduct from './screens/AddProduct';
import ProductDetails from './screens/ProductDetails';
import ProductsList from './screens/ProductsList';
import { ACCENT_COLOR } from './constants/colors';
import { store } from './redux/store';
import { type RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={({ navigation }) => ({
            title: 'Products',
            headerRight: () => (
              <IconButton
                color="white"
                icon={(props) => (
                  <Icon name="plus" {...props} color={ACCENT_COLOR} />
                )}
                onPress={() => navigation.navigate('AddProduct')}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Product"
          component={ProductDetails}
          options={({ route }) => ({ title: route.params.product.title })}
        />

        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{ title: 'Add Product' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
