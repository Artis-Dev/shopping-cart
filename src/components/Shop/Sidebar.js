import Checkbox from '../Shared/Checkbox';

function Sidebar() {
  return (
    <div className="w-full text-lg sm:max-w-[278px] ">
      <h2 className="mb-4 text-3xl font-bold">Filters</h2>
      <div className="flex gap-y-4 gap-x-6 sm:flex-col">
        <div>
          <h3 className="mb-2 text-2xl">Exclusivity</h3>
          <Checkbox name="lorem" id="lorem" text="Lorem" />
        </div>
        <div>
          <h3 className="mb-2 text-2xl">Categories</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-0 sm:flex-col">
            <Checkbox name="ipsum" id="ipsum" text="Ipsum" />
            <Checkbox name="dolor" id="dolor" text="Dolor" />
            <Checkbox name="amet" id="amet" text="Amet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
