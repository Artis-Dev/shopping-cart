import CategoryBox from './CategoryBox';

function FeaturedProductsSection() {
  return (
    <div className="w-full">
      <div className="m-auto mt-12 max-w-screen-xl  justify-between  px-12 ">
        <h2 className="mb-6 text-4xl">Featured Products</h2>
        <div className="flex flex-col gap-6 sm:flex-row">
          <CategoryBox text="Lorem" link="/" />
          <CategoryBox text="Ipsum" link="/" />
          <CategoryBox text="Dolor" link="/" />
          <CategoryBox text="Sit" link="/" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductsSection;
