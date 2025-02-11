import "./BackgroundTheme.scss";
import DigitalAccountOpening from "../DigitalAccountOpening";
import RoshanAccountOpening from "../RoshanAccountOpening";
import { motion } from "framer-motion";
import {forwardRef} from 'react'
// function BackgroundTheme({ children,showSection,sectionRef }) {
//
// }

const BackgroundTheme = forwardRef(({ showSection, children,selectedProduct }, ref) => {
  return (
    <div>
      <div className="container">
        <div className="overlay"></div>
        <div className="content">{children}</div>
      </div>
      <div className="digitalAccount">
        {showSection && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="full-screen"
          >
            {selectedProduct === 'Digital Account Opening' && <DigitalAccountOpening />}
            {selectedProduct === 'Roshan Digital Account' &&  <RoshanAccountOpening />}
           
          </motion.div>
        )}
      </div>
    </div>
  );
});

export default BackgroundTheme;
