export const container = {
  hidden : {opacity: 0},
  visible : {
    opacity: 1,
    transition:{
      staggerChildren : 0.2,
      delayChildren : 0.5
    }
  }
};

export const text = {
  hidden: {opacity:0, y:50},
  visible : {opacity:1, y:0}
};

{/* <motion.div className='text-box'
          initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
        >테스트</motion.div> */}