import { Link } from 'react-router-dom';

function MainSection() {
  return (
    <div className="mb-12 w-full bg-gray-100">
      <div className="m-auto flex h-80 max-w-screen-xl p-12">
        <div className="self-center">
          <h2 className="text-4xl">Unleash Your Inner Fan</h2>
          <h3 className="mb-6 text-2xl">
            Explore Our Featured Products Collection
          </h3>
          <Link
            to="/shop"
            className="inline-block self-center rounded-md bg-gray-700 py-4 px-6 text-white"
          >
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
