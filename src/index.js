import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import block from './images/block.jpg';
import toy from './images/toy.jpg';
import copter from './images/copter.jpg';
import './index.css';

const initialState = { count: 0 };
const initialState1 = { count1: 0 };
const initialState2 = { count2: 0 };

function Cart(state, action) {
  switch (action.category) {
    case "block":
      return { count: state.count + 1 };
    case "block-1":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Cart1(state1, action1) {
  switch (action1.category) {
    case "toy":
      return { count1: state1.count1 + 1 };
    case "toy-1":
      return { count1: state1.count1 - 1 };
    case "reset":
      return { count1: 0 };
    default:
      return state1;
  }
}

function Cart2(state2, action2) {
  switch (action2.category) {
    case "copter":
      return { count2: state2.count2 + 1 };
    case "copter-1":
      return { count2: state2.count2 - 1 };
    case "reset":
      return { count2: 0 };
    default:
      return state2;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(Cart, initialState);
  const [state1, dispatch1] = useReducer(Cart1, initialState1);
  const [state2, dispatch2] = useReducer(Cart2, initialState2);

  function Reset() {
    dispatch({ category: "reset" });
    dispatch1({ category: "reset" });
    dispatch2({ category: "reset" });
  }

  return (
    <div className='all'>
      <h1 className='shop'>Shopping Cart</h1>
      <div className='Container'>
        <div className='allimg'>
          <div className='img'>
            <img src={block} alt="block" className='img' /><br/>
          </div>
          <h2>BLOCKS</h2>
          <p>Price: $2.00</p>
          <p>Get the best with good quality</p>
          <button onClick={() => dispatch({ category: "block" })}>Add to cart</button>
        </div>

        <div className='allimg'>
          <div className='img'>
            <img src={toy} alt='toy' className='img' /><br/>
          </div> 
          <h2>CARS</h2>
          <p>Price: $3.00</p>
          <p>Get the best with good quality</p>
          <button onClick={() => dispatch1({ category: "toy" })}>Add to cart</button>
        </div>

        <div className='allimg'>
          <div className='img'>
            <img src={copter} alt='copter' className='img' />
          </div>
          <h2>HELICOPTER</h2>
          <p>Price: $2.40</p>
          <p>Get the best with good quality</p>
          <button onClick={() => dispatch2({ category: "copter" })}>Add to cart</button>
        </div>
      </div><br/>

      <div className='Carddisplay'>
        <h1>Your Cart</h1>
        <h1>Block count: <span onClick={() => dispatch({ category: "block-1" })}>-</span> {state.count} <span onClick={() => dispatch({ category: "block" })}>+</span></h1>
        <h1>Car count: <span onClick={() => dispatch1({ category: "toy-1" })}>-</span> {state1.count1} <span onClick={() => dispatch1({ category: "toy" })}>+</span></h1>
        <h1>Helicopter count: <span onClick={() => dispatch2({ category: "copter-1" })}>-</span> {state2.count2} <span onClick={() => dispatch2({ category: "copter" })}>+</span></h1>
        <h1>Total count: {state.count + state1.count1 + state2.count2}</h1>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
