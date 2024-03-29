import React, { useEffect, useReducer, useState } from 'react';
import logger from 'use-reducer-logger';
import CartCard from '../components/CartCard';
import { useAuthContext } from '../hooks/useAuthContext';
import Header from '../components/Header';
import '../CSS/CartPage.css';

import CartTotal from './cartTotal';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'CART_FETCH_SUCCESS':
//       return { ...state, cartitems: action.payload, loading: false };
//     case 'GEM_FETCH_SUCCESS':
//       return { ...state, gems: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

const CartPage = () => {
  const { user, cartData, setCartData } = useAuthContext();
  const [gems, setGems] = useState([]);
  const [jewelleries, setJewelleries] = useState([])
  //   const [{ loading, error, cartitems, gems }, dispatch] = useReducer(
  //     logger(reducer),
  //     {
  //       cartitems: [],
  //       gems: [],
  //       loading: true,
  //       error: '',
  //     }
  //   );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const response = await fetch('/api/gems&jewelleries/gems');
        const json = await response.json();
        setGems(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGems();
    
    const fetchJewelleries = async () => {
      try {
        const response = await fetch(`/api/jewelleryes`);
        const json = await response.json();
        setJewelleries(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJewelleries();

    // const userId = JSON.parse(localStorage.getItem('userInfo'))._id;
    // console.log(userId);
    // const fetchGems = async () => {
    //   dispatch({ type: 'FETCH_REQUEST' });
    //   try {
    //     const response = await fetch('/api/gems&jewelleries/gems');
    //     const json = await response.json();
    //     dispatch({ type: 'GEM_FETCH_SUCCESS', payload: json });
    //   } catch (err) {
    //     dispatch({ type: 'FETCH_FAIL', payload: err.message });
    //   }
    // };
    // const fetchCart = async () => {
    //   dispatch({ type: 'FETCH_REQUEST' });
    //   try {
    //     const response = await fetch(`/api/cart/user/${userId}`);
    //     const json = await response.json();
    //     dispatch({ type: 'CART_FETCH_SUCCESS', payload: json });
    //   } catch (err) {
    //     dispatch({ type: 'FETCH_FAIL', payload: err.message });
    //   }
    // };
    // fetchGems();
    // fetchCart();
  }, []);

  // useEffect(() => {
  //   // const cal = () => {
  //   //   let sum = 0;
  //   //   cartData.map(
  //   //     (cartIns) =>
  //   //       (sum +=
  //   //         cartIns.cartquantity *
  //   //         gems.find((gem) => gem._id === cartIns.cartitemid).price)
  //   //   );
  //   //   setTotal(sum);
  //   // };
  //   if (gems && cartData) cal();
  // }, [gems, cartData]);

  return (
    <>
      <Header />

      <div>
        <div className="darkBlueTopicBoxcart">
          <h1 className="pageTopiccart">My Cart</h1>
        </div>
        <div className="lightBlueBodyBGcart">
          <div className="cart-col-1">
            {gems?.length &&
              cartData &&
              cartData.map((item) => (
                <CartCard
                  key={item._id}
                  cartid={item._id}
                  gem={gems.find((gem) => gem._id === item.cartitemid) || null}
                  jewellery={jewelleries.find(jwl => jwl._id === item.cartitemid) || null}
                  // gemid={item.cartitemid}
                ></CartCard>
              ))}
          </div>
          <div className="cart-col-2">
            {/* {JSON.stringify(gems)}
              {JSON.stringify(cartData)} */}
            <CartTotal gems={gems} jewelleries={jewelleries} cartData={cartData}></CartTotal>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
