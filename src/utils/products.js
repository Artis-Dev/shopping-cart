import uniqid from 'uniqid';
import mickey from '../assets/mickey.webp';

const products = [
  {
    id: uniqid(),
    name: 'Product Name #1 (dolor)',
    price: 10.0,
    image: mickey,
    category: 'dolor',
    exclusive: false,
  },
  {
    id: uniqid(),
    name: 'Product Name #2 (dolor)',
    price: 14.99,
    image: mickey,
    category: 'dolor',
    exclusive: false,
  },
  {
    id: uniqid(),
    name: 'Product Name #3 (ipsum)',
    price: 9.5,
    image: mickey,
    category: 'ipsum',
    exclusive: true,
  },
  {
    id: uniqid(),
    name: 'Product Name #4 (amet)',
    price: 7.7,
    image: mickey,
    category: 'amet',
    exclusive: false,
  },
  {
    id: uniqid(),
    name: 'Product Name #5 (amet)',
    price: 12.0,
    image: mickey,
    category: 'amet',
    exclusive: true,
  },
  // {
  //   id: uniqid(),
  //   name: 'Product Name #6 (amet)',
  //   price: 19.99,
  //   image: mickey,
  //   category: 'amet',
  // },
];

export default products;
