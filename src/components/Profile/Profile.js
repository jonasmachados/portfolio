import profile_photo from "./../../assets/img/profile.png";
import "./Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 1 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};

const Profile = () => {
    return (
        <motion.div className="container-profile"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit">
            <h1>About Me!</h1>
            <img src={profile_photo} alt="profile_photo" />
        </motion.div>
    );
};

export default Profile;