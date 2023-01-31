import profile_photo from "./../../assets/img/profile.png";
import "./Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    return (
        <div className="container-profile">
            <h1>About Me!</h1>
            <img src={profile_photo} alt="profile_photo" />
        </div>
    );
};

export default Profile;