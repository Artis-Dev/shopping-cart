import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Product from '../Shop/Product';

function FeaturedProductsSection() {
  const { products } = useSelector((state) => state);

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

  const randomFourItems = useMemo(() => {
    const shuffledItems = shuffleArray(products);
    return shuffledItems.slice(0, 4);
  }, [products]);

  return (
    <div className="mb-6 w-full sm:mb-12">
      <div className="m-auto max-w-screen-xl justify-between px-6 sm:px-12 ">
        <h2 className="mb-6 text-4xl">Featured Products</h2>
        <div className="grid min-w-[278px] grid-cols-[repeat(auto-fit,minmax(278px,1fr))] gap-6">
          {randomFourItems.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductsSection;
