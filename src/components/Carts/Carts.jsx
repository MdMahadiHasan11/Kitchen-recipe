import { useEffect } from "react";
import { useState } from "react";
import Cart from '../../components/Cart/Cart'
import PropTypes from 'prop-types';


const Carts = ({handleAddBookmark}) => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCarts(data));
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="md:grid grid-cols-2">
                {
                    carts.map(cart => <Cart
                        key={cart.recipe_id}
                        cart={cart} 
                        handleAddBookmark={handleAddBookmark}
                        ></Cart>)
                }
            </div>


        </div>
    );
};

Carts.propTypes = {
    handleAddBookmark:PropTypes.func
}

export default Carts;