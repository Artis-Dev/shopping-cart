// import { useDispatch } from 'react-redux';
import CategoryBox from './CategoryBox';

function CategoriesSection() {
  return (
    <div className="mb-6 w-full sm:mb-12">
      <div className="m-auto  max-w-screen-xl justify-between px-6 sm:px-12">
        <h2 className="mb-6 text-4xl">Categories</h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <CategoryBox text="Movies" category="movies" />
          <CategoryBox text="Television" category="television" />
          <CategoryBox text="Games" category="games" />
        </div>
      </div>
    </div>
  );
}

export default CategoriesSection;
