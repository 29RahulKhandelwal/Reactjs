// import {createStore} from "redux";

const initialState={counter:0, showCounter:true};

const counterReducer=(state=initialState,action)=>{
    if(action.type==='increment'){
        return{
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }else if(action.type==='incrementfive'){
        return{
            counter:state.counter+action.amount,
            showCounter:state.showCounter
        }
    }else if(action.type==='decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }else if(action.type==='toggle'){
        return{
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
    return state;
};

const store=createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;