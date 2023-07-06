import React, { useCallback, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik, type FormikHelpers } from 'formik';
import { TextInput } from '@react-native-material/core';
import { useDispatch } from 'react-redux';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { addProduct } from '../../redux/slices/productsSlice';
import { type RootStackParamList } from '../../types/navigation';
import { addProductSchema } from '../../types/validation';
import Button from '../../components/Button';

interface FormValues {
  title: string;
  price: number;
  description: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'AddProduct'>;

const AddProduct: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const initialValues = useMemo(
    () => ({ title: '', price: 0, description: '' }),
    []
  );

  const handleSubmit = useCallback(
    (values: FormValues, helpers: FormikHelpers<FormValues>) => {
      dispatch(addProduct({ ...values, price: Number(values.price) }));

      helpers.resetForm();

      alert('Product created!');

      navigation.navigate('Products');
    },
    [dispatch, navigation]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addProductSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            label="Title"
            style={styles.input}
            inputMode="text"
            value={values.title}
            onChangeText={handleChange('title')}
            helperText={errors.title && touched.title ? errors.title : ''}
          />

          <TextInput
            label="Price"
            style={styles.input}
            inputMode="numeric"
            value={String(values.price)}
            onChangeText={handleChange('price')}
            helperText={errors.price && touched.price ? errors.price : ''}
          />

          <TextInput
            label="Description"
            style={styles.input}
            inputMode="text"
            value={values.description}
            onChangeText={handleChange('description')}
            helperText={
              errors.description && touched.description
                ? errors.description
                : ''
            }
          />

          <Button onPress={handleSubmit} title="Add Product" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    padding: 15,
  },

  input: {
    marginBottom: 30,
    width: '100%',
  },
});

export default AddProduct;
