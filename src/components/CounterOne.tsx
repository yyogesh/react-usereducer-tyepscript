import React, { useReducer } from 'react'

const initialState = 0;

// An enum with all the types of actions to use in our reducer
enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
    REST = 'RESET'
}

const reducer = (state: number, action: CountActionKind) => {
    switch (action) {
        case CountActionKind.INCREASE:
            return state + 1
        case CountActionKind.DECREASE:
            return state - 1
        case CountActionKind.REST:
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    const [state, dispatch] = useReducer(reducer, initialState)

    // arr.reduce((initValue, arrItem) => {
    //     return initValue + arrItem
    // }, 100)

    return (
        <div>
            <div>Count = {state}</div>
            <button onClick={() => dispatch(CountActionKind.INCREASE)}>Increment</button>
            <button onClick={() => dispatch(CountActionKind.DECREASE)}>Decrement</button>
            <button onClick={() => dispatch(CountActionKind.REST)}>Reset</button>
        </div>
    )
}

export default CounterOne