import React, { useReducer } from 'react'

const Counter = () => {
    function reducer(state ,action) {
        switch (action.type) {
            case "Increment":
                return (state.count + 1);
            case "Decrement":
                return (state.count - 1);



            default:
                return state;
        }

    }
    const initialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialState)
    dispatch()
        action.Increment(
           state.count=state.count+1
        )

    

    return (
        <div>
            <h1>
                Counter :{initialState}
            </h1>
            <button >

            </button>


        </div>
    )
}

export default Counter