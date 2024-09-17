import React from 'react'

function Product_details({item}) {
// const { images,thumbnai,description, brand,title, price, discountPercentage, rating } = item;
const prod=item
  return (
    <div>
     <div className=' h-1/4 p-4 grid grid-cols-2 gap-2'>

     <div className='border border-gray-400 rounded-lg h-3/4 flex items-center justify-center'>
      <img src={prod.images} alt={prod.title} className='w-full h-full object-contain' />
    </div>

    <div className="border border-gray-400 rounded-lg h-3/4 flex flex-col gap-4 pl-4">
      <div><strong>{prod.title}</strong></div>
      <div>{prod.description}</div>

        <div className='flex flex-row items-center mb-4'>
        <div>Rating: {prod.rating} / 5</div>
        <div className='text-xl px-2'>|</div>
        <div>Brand : {prod.brand}</div>
        <div className='text-xl px-2'>|</div>
        <div>Category : {prod.category}</div>
        </div>

          <div><strong>${prod.price} </strong>Inclusive of all prices</div>
          <div>Discount: {prod.discountPercentage}%</div>
        </div>
      </div>

      <div className='mt-[-12%] ml-4 w-96'>
        <h2 className='ml-4 font-bold '>Reviews:</h2>
        {prod.reviews ? (
          prod.reviews.map((review, index) => (
            <div key={index} className='border border-gray-400 rounded-lg p-4 mb-4'>
              <div><strong>Rating:</strong> {review.rating} / 5</div>
              <div><strong>Comment:</strong> {review.comment}</div>
              <div><strong>Reviewer:</strong> {review.reviewerName}</div>
            </div>
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </div>
      
    </div>

  )
}

export default Product_details
