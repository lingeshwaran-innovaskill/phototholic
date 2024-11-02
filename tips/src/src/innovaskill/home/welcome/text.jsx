import { motion } from "framer-motion";
import './welcome.css';

const TextAni = ({children}) => {


    const stretch = () => {
        return{
            transform : [
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ]
        }
    }

    return(<>
    <motion.h1 whileHover={()=>stretch} >
        {children}
    </motion.h1>
 
    </>)
}
export default TextAni;