import React, { useState } from 'react';
import search_img from '../images/search.png';
import Wall_Washer_Series from './Wall_Washer_Series';
import Flood_Light_Series from './Flood_Light_Series';
import Underwater_Light_Series from './Underwater_Light_Series';
import Underground_Series from './Underground_Series';
import Tree_Light_Series from './Tree_Light_Services';

const Lighting = () => {
  // Product categories and corresponding components
  const categories = [
    { name: 'Wall Washer Series', component: <Wall_Washer_Series /> },
    { name: 'Flood Light Series', component: <Flood_Light_Series /> },
    { name: 'Underwater Light Series', component: <Underwater_Light_Series /> },
    { name: 'Underground Light', component: <Underground_Series /> },
    { name: 'Tree Light Series', component: <Tree_Light_Series /> },
  ];

  // Initially, all categories are visible, and all checkboxes are unchecked
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Toggle selection of a category
  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName) // Remove if already selected
        : [...prev, categoryName] // Add if not selected
    );
  };

  // Determine which categories to display
  const displayedCategories =
    selectedCategories.length === 0
      ? categories // Show all if no categories are selected
      : categories.filter((category) => selectedCategories.includes(category.name));

  return (
    <>
      <div data-aos="fade-down" className="bg_ligting flex justify-center items-center">
        <h1 className="text-3xl josefin font-semibold">NMOLD LIGHTING SERVICES</h1>
      </div>
      <div className="mt-20 mx-44">
        <h1
          data-aos-delay="300"
          data-aos="zoom-in-down"
          className="text-center font-bold josefin text-4xl"
        >
          The lighting Products We Offer
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="400"
          className="custom_blue josefin text-[25px] mt-14"
        >
          Find the Products You Need
        </h1>
        <div className="flex mt-8">
          {/* Sidebar */}
          <div className="w-[310px]">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-72 rounded-2xl h-12 flex items-center outline outline-gray-600 bg-transparent"
            >
              <input
                placeholder="Search"
                className="outline-none w-[240px] bg-transparent px-4"
              />
              <img className="h-6" src={search_img} />
            </div>
            {/* Product categories */}
            <div
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="400"
              className="mt-5"
            >
              <h1 className="text-xl font-medium josefin">Product Categories</h1>
              {categories.map((category) => (
                <div key={category.name} className="flex items-center pt-1">
                  <input
                    type="checkbox"
                    id={category.name}
                    className="mr-2 cursor-pointer"
                    checked={selectedCategories.includes(category.name)} // Checked state
                    onChange={() => handleCheckboxChange(category.name)}
                  />
                  <label
                    htmlFor={category.name}
                    className="jost hover:text-[#0088ff] font-medium transition-all ease-linear cursor-pointer"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div>
            {displayedCategories.map((category) => (
              <div key={category.name}>{category.component}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lighting;
