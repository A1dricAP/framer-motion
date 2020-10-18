import React, {useEffect} from 'react';
import {motion} from 'framer-motion'
const containerVariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring', 
      when:"beforeChildren",
      mass:'0.4',
      damping:'8',
      staggerChildren:'0.4'
    }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}

const childVariants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}
const Order = ({ pizza, setShowModal }) => {
  
  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[setShowModal])  //* dependency
  /*
  To customize the above behavior, we can use an array of 
  dependencies as a second argument of the useEffect hook. 
  With it, the callback runs only if some of the elements of the array change.
  */

  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'>

    
{/* here we're saying that showtitle must be true, for the <h2> to be displayed. */}
      
      <h2>Thank you for your order :)</h2>
      <motion.p
      variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
      variants={childVariants}
      >      
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;