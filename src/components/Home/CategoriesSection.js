import CategoryBox from './CategoryBox';

function CategoriesSection() {
  return (
    <div className="mb-12 w-full">
      <div className="m-auto  max-w-screen-xl justify-between px-12 ">
        <h2 className="mb-6 text-4xl">Categories</h2>
        <div className="flex flex-col gap-6 sm:flex-row">
          <CategoryBox text="Ipsum" link="/shop?ipsum=true" />
          <CategoryBox text="Dolor" link="/shop?dolor=true" />
          <CategoryBox text="Amet" link="/shop?amet=true" />
        </div>
      </div>
    </div>
  );
}

export default CategoriesSection;
