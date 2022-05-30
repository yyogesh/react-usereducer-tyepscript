import { FunctionComponent, useEffect, useReducer } from "react";

// Interface for our state
interface LoadingState {
    loaded: boolean;
    loading: boolean;
    error: Error | null;
}

const intitalState: LoadingState = {
    loaded: false,
    loading: false,
    error: null,
}

// The example component that use the `useReducer` hook with our state
const LoadingComponent: FunctionComponent = () => {
    /** 
     See here that we are using `newState: Partial<LoadingState>` in our reducer
     so we can provide only the properties that are updated on our state
     */
    const [state, setState] = useReducer(
        (state: LoadingState, newState: Partial<LoadingState>) => ({
            ...state,
            ...newState,
        }),
        intitalState
    );

    useEffect(() => {
        // And here we provide only properties that are updating on the state
        setState({ loading: true });
        setState({ loading: false, loaded: true });
        setState({ loading: false, loaded: true, error: new Error() });
    }, []);

    if (state.loading) {
        return <p>Loading</p>;
    }

    return <p>{state.loaded}</p>;
};

export default LoadingComponent;