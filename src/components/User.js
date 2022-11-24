import React,{useState,useEffect} from 'react'
import axios from 'axios'

const User = () => {
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
                setError(err)
                setLoading(false)
            }
        },[]
    )
  return (
    <div>
        {
            loading?<h1>Loading.....</h1>:error!=''?<h1>Error..</h1>:
            <ul>
                {
                    user.map((ele)=>{
                       return<li>{ele.firstName}
                        </li>
                    })
                }
            </ul>
        }
    </div>
  )
}

export default User