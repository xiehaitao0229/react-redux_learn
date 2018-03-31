const ADD_NUM = 'ADD_NUM'
const MINUS_NUM = 'MINUS_NUM'

//reducer
const initState = {
   num:10
}
export function counter(state=initState, action){
   switch (action.type){
       case ADD_NUM:
           return {...state, num:state.num+1}
       case MINUS_NUM:
           return {...state, num:state.num-1}
       default:
           return state
   }
}

export function addNumAsync(){
    return dispatch=>{
        //  模拟异步请求
        setTimeout(()=>{
            dispatch(addNum());
        },2000)
    }
}

//action creater
export function addNum(){
   return {type:ADD_NUM}
}

export function minuxNum(){
   return {type:MINUS_NUM}
}
