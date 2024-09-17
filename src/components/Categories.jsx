import React from 'react'

function Categories({catg,getCategoryProducts}) {
    let{name}=catg;
    function handleCategoryClick(){
      const formattedName = name.replace(/\s+/g, '-');
        getCategoryProducts(formattedName);
    }
  return (
    <div className="w-full">
      <button
        onClick={handleCategoryClick}
        className=" text-start w-full bg-white text-gray-700  rounded-md hover:bg-gray-300 focus:outline-none">
        {name}
      </button>
    </div>
  )
}

export default Categories
