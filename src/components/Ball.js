import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyBall } from '../redux/ballAction'

const Ball = ({balls,buyball,sellball}) => {
    const [qty,setQty]=useState(1)
   
  return (
    <div>
        <h1>Balls:{balls}</h1>
        
        <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}/>
        
        
    <button onClick={()=>buyball(qty)}>Buy ball</button>
    <button onClick={()=>sellball()}>Sell ball</button>
        
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        balls: state.ball.balls
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyball:(qty)=>
        dispatch(buyBall(qty)),
        sellball:()=>
        dispatch({type:'SELL_BALL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)