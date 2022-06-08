import { ADD, COUNTER_DECREMENT, COUNTER_INCREMENT, DIVIDE, MULTIPLY, SUBTRACT, TAKE } from "./action.type";

let initState={
    count:0,
    query:""
}

export const reducer =(state=initState,action)=> {

    // console.log(state,action);

    switch (action.type) {

        case COUNTER_INCREMENT: {
            state.count++;
            return {...state};
        }
        case COUNTER_DECREMENT: {
            state.count--;
            return {...state};
        }
        case TAKE: {
        
            return {
                count:state.count,
                query: action.payload};
        }
        case ADD: {

            return {
                count: state.count+Number(state.query),
                query:""
            }
        }
        case MULTIPLY: {
            return {
                count: state.count*Number(state.query),
                query: state.query
            }
        }
        case SUBTRACT: {
            return {
                count: state.count-Number(state.query),
                query: state.query
            }
        }
        case DIVIDE: {
            return {
                count: state.count/Number(state.query),
                query: state.query
            }
        }
        default: {
            return state
        }
    }

    
}