import * as Yup from 'yup';

export const addProductSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('The field is required'),
  price: Yup.number()
    .positive('The price is too low')
    .required('The field is required'),
  description: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('The field is required'),
});
