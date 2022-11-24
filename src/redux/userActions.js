import * as actionTypes from './action'
export const fetchReq=()=>{
return{
    type:actionTypes.FetchReq
}
}

export const fetchSuc=(users)=>{
    return{
        type:actionTypes.FetchSuc,
        payload:users
    }
    }

export const fetchFail=(err)=>{
        return{
            type:actionTypes.FetchFail,
            payload:users
        }
        }
export const fetchUsers=()=>{
    return(dispatch)=>{
        
    }
}
