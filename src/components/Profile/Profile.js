import profile_photo from "./../../assets/img/profile.png";
import "./Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {
    return (
        <section className="container-profile">
        <h1>About Me!</h1>
        <img src={profile_photo} alt="profile_photo" className="img" />
        </section>
    );
  };

  export default Profile;
  