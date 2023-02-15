import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '../../utils/useMediaQuery';
import Product from '../Shop/Product';

function FeaturedProductsSection() {
  const { products } = useSelector((state) => state);
  const big = useMediaQuery('(max-width: 1279px)');
  const small = useMediaQuery('(max-width: 977px)');

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const randomItems = useMemo(() => {
    let numberOfItems;
    if (small) {
      numberOfItems = 2;
    } else {
      numberOfItems = big ? 3 : 4;
    }
    const shuffledItems = shuffleArray(products);
    return shuffledItems.slice(0, numberOfItems);
  }, [products, big, small]);

  return (
    <div className="mb-6 w-full sm:mb-12">
      <div className="m-auto max-w-screen-xl justify-between px-6 sm:px-12 ">
        <h2 className="mb-6 text-4xl">Featured Products</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 sm:gap-6">
          {randomItems.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductsSection;
