import React from 'react'
import "./styles.css";
import SvgError404 from '../SVG/SvgError404';
import { motion } from 'framer-motion';

const containerErrorVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.3, duration: 1.3 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

function Error404({ message }) {

  return (
    <motion.div
      className="container-error"
      variants={containerErrorVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <h1>Error</h1>
        <p>Oops! Something went wrong.</p>
      </div>

      <div>
        <SvgError404 />
      </div>

      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </motion.div>
  )
}


export default Error404;

