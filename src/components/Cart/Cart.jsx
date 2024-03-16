
import calorie from '../../assets/images/calories.png'
import time from '../../assets/images/time.png'

import PropTypes from 'prop-types';


const Cart = ({ cart , handleAddBookmark }) => {
    const { recipe_id, img, recipe_name, short_desc, ingredients, prepare_time, calories } = cart;
    return (
        <div>
            {/* cart */}

            <div className="card lg:m-10 m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body px-10 pt-5 ">
                    <h2 className="card-title text-xl font-bold">{recipe_name}</h2>
                    <p>{short_desc}
                    </p>
                    <div className='border border-solid border-gray-200 my-4'>

                    </div>




                    {/* ingredients list */}
                    <div>
                        <p className='font-semibold text-lg'>Ingredients: {ingredients.length}</p>
                        {ingredients.length > 0 ? (
                            <ul>
                                {ingredients.map((ingredient) => (
                                    <li key={recipe_id}>{ingredient}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No ingredients to display</p>
                        )}



                        {/* <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul> */}

                        <div className='border border-solid border-gray-200 my-4'> </div>


                        <div className='flex justify-around'>
                            <div className='flex gap-2'>
                                <img src={time} alt="" />
                                <p>{prepare_time} minutes</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={calorie} alt="" />
                                <p>{calories} calories</p>
                            </div>
                        </div>


                    </div>

                    <div className="card-actions items-center text-center py-4">
                        <button onClick={()=> handleAddBookmark(cart)} className="py-2 px-4 mx-auto bg-[#0BE58A] rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func
}

export default Cart;