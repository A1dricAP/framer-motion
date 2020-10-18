import React from'react'
import {Link} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

const backdropVariants={
    hidden:{opacity:0},
    visible:{opacity:1}
}

const modal={
    hidden:{
        opacity:0,
        y:"-100vh"
    },
    visible:{
        opacity:1,
        y:"200px",
        transition:{
            delay:0.5
        }
    }
}

// receiving props, from the components.
const Modal=({showModal, setShowModal})=>{
   return (
   <AnimatePresence exitBeforeEnter>
       {showModal&&(
           <motion.div className='backdrop'
           variants={backdropVariants}
           initial='hidden'
           animate='visible'
           exit='hidden'>
               <motion.div className='modal'
               variants={modal}
               initial='hidden'
               animate='visible'>
               <p>Want to Start Again?</p>
                   <Link to='/'>
                       <button>
                           Start Again
                       </button>
                   </Link>
               </motion.div>
           </motion.div>
       )}
   </AnimatePresence>
    )
}

export default Modal