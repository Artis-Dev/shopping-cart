import { number, shape, string } from 'prop-types';
import { useState } from 'react';
import Description from './Description';
import Details from './Details';

function Tabs({ product }) {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex border-b">
        <button
          type="button"
          onClick={() => handleTabClick('description')}
          className={`mt-[2px] flex h-12 items-center border-b-2 px-6 font-semibold ${
            activeTab === 'description' ? 'border-black' : 'border-transparent'
          }`}
        >
          Description
        </button>
        <button
          type="button"
          onClick={() => handleTabClick('details')}
          className={`mt-[2px] flex h-12 items-center border-b-2 px-6 font-semibold ${
            activeTab === 'details' ? 'border-black' : 'border-transparent'
          }`}
        >
          Details
        </button>
      </div>
      <div className="rounded-b-lg p-6">
        {activeTab === 'details' ? (
          <Details product={product} />
        ) : (
          <Description description={product.description} />
        )}
      </div>
    </>
  );
}

Tabs.propTypes = {
  product: shape({
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
  }).isRequired,
};

export default Tabs;
