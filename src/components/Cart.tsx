import React, { useReducer } from 'react';

const Cart = () => {
  const initialOrderState = {
    chicken: 0,
    coke: 0,
    fries: 0,
    total: 0,
  };

  const [orderState, dispatch] = useReducer((state: any, action: { type: string, value: number }) => {
    switch (action.type) {
      case 'CHICKEN':
        return {
          ...state,
          chicken: state.chicken + action.value,
          total: state.total + action.value * 3, // a chicken piece costs 3$
        };
      case 'COKE':
        return {
          ...state,
          coke: state.coke + action.value,
          total: state.total + action.value * 0.5, // a coke costs 0.5$
        };
      case 'FRIES':
        return {
          ...state,
          fries: state.fries + action.value,
          total: state.total + action.value, // a fries set costs 1$
        };
      case 'RESET':
        return initialOrderState;
      default:
        return state;
    }
  }, initialOrderState);

  const buttonHander = (type: string, value: number) => {
    dispatch({
      type: type,
      value: value,
    });
  };

  // This function is associated with the reset button
  const resetOrder = () => {
    dispatch({ type: 'RESET', value: 0 });
  };

  // This function is associated with the order button
  const submitOrder = () => {
    alert(`You have submitted your order successfully - ${orderState.total}`);
  };

  return (
    <div style={styles.container}>
      <div>
        <p>Pricing: 3$ / chicken piece, 0.5$ / 1 Coke, 1$ / fries </p>
      </div>
      <hr />

      <div>
        <p>
          Fried chicken: {orderState.chicken} &nbsp;
          <button onClick={() => buttonHander('CHICKEN', 1)}>+</button>
          <button
            onClick={() => buttonHander('CHICKEN', -1)}
            disabled={orderState.chicken === 0}
          >
            -
          </button>
        </p>
        <p>
          Coke: {orderState.coke} &nbsp;
          <button onClick={() => buttonHander('COKE', 1)}>+</button>
          <button
            onClick={() => buttonHander('COKE', -1)}
            disabled={orderState.coke === 0}
          >
            -
          </button>
        </p>
        <p>
          Fired potats: {orderState.fries} &nbsp;
          <button onClick={() => buttonHander('FRIES', 1)}>+</button>
          <button
            onClick={() => buttonHander('FRIES', -1)}
            disabled={orderState.fries === 0}
          >
            -
          </button>
        </p>
        <br />
        <p>Total: {orderState.total}$</p>
        <p>
          <button onClick={resetOrder}>Reset</button>
          <button onClick={submitOrder}>Order</button>
        </p>
      </div>
    </div>
  );
};

export default Cart;

const styles = {
  container: {
    padding: 50,
  },
};