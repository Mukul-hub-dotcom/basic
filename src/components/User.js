import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { fetchUsers } from '../redux/userActions'
import { connect } from 'react-redux'

const User = (userData,fetchUsers) => {
    const[loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [user,setUsers]=useState([])
    useEffect(
        async()=>{
            try {
                let res=await axios.get(`https://dummyjson.com/users`)
                let data=res.data
                setUsers(data.users)
                // console.log(data.users)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
            // fetchUsers()
        },[]
    )
  return (
    <div>
        {
            loading?<h1>Loading.....</h1>:error!=''?<h1>{error}</h1>:
            <ul>
                {
                    user.map((ele)=>{
                       return<li>{ele.firstName}
                        </li>
                    })
                }
            </ul>
        }
        {/* {/* thunk deployed commented */}
         {
            userData.loading?<h1>Loading.....</h1>:userData.error!=''?<h1>{userData.error}</h1>:
            <ul>
                {
                    userData.user.map((ele)=>{
                       return<li>{ele.firstName}
                        </li>
                    })
                }
            </ul>
        } */}
    </div>
  )
}

// const mapStateToProps=(state)=>{
//     return{
//     userData:state.user}
// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         fetchUsers:()=>dispatch(fetchUsers())

//     }
// }
// export default connect(mapDispatchToProps,mapStateToProps)(User)
export default User

