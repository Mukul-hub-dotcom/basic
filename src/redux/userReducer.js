import * as actionTypes from './action'


const initialState={
    loading:false,
    error:'',
    users:[]
}
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FetchReq:
            return{...state,loading:true}
        case actionTypes.FetchSuc:
            return{...state,loading:false,users:[action.payload]}
        case actionTypes.FetchFail:
            return{...state,loading:false,error:action.payload}
        default:return state

    }
}
export default userReducer