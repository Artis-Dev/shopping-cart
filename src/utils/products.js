import uniqid from 'uniqid';
import mickey from '../assets/mickey.webp';

const products = [
  { id: uniqid(), name: 'Product Name #1', price: 10.0, image: mickey },
  { id: uniqid(), name: 'Product Name #2', price: 14.99, image: mickey },
  { id: uniqid(), name: 'Product Name #3', price: 9.5, image: mickey },
  { id: uniqid(), name: 'Product Name #4', price: 7.7, image: mickey },
  { id: uniqid(), name: 'Product Name #5', price: 12.0, image: mickey },
  // { id: '5', name: 'Product Name #6', price: 19.99, image: mickey },
];

export default products;
