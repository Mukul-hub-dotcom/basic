import axios from 'axios'
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
            payload:err
        }
        }
export const fetchUsers=()=>{
    return async(dispatch)=>{
        dispatch(fetchReq())
        try {
            let res=await axios.get(`https://dummyjson.com/users`)
            let data=res.data
            dispatch(fetchSuc(data.users))
            
        } catch (err) {
            dispatch(fetchFail(err))
            
        }
    }
}
