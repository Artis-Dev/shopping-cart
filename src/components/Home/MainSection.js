import NavButton from '../Shared/NavButton';

function MainSection() {
  return (
    <div className="mb-12 w-full bg-gray-100">
      <div className="m-auto flex h-80 max-w-screen-xl p-12">
        <div className="self-center">
          <h2 className="text-5xl font-semibold">Unleash Your Inner Fan</h2>
          <h3 className="mb-6 text-3xl font-normal">
            Explore Our Featured Products Collection
          </h3>
          <NavButton link="/shop" text="All Products" />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
