import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductDetails } from './screens/ProductDetails/ProductDetails';
import { ProductsList } from './screens/ProductsList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>You are piska</Text>
    //   <ProductsList />
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductsList}
          options={{ title: 'Products' }}
        />
        <Stack.Screen
          name="Product"
          component={ProductDetails}
          options={({ route }) => ({ title: route.params.product.title })}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
