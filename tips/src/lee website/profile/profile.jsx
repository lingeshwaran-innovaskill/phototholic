import './profile.css';
import bg from './bg.jpg';




 
function Profile({profile}) {

    console.log(profile);

    return ( <>

    <div className="main-profile">
        <img src={bg} />
        <div className="body-profile">

        {/* <h1>User Profile </h1> */}

    <div className='profile-title'>
        <h3> {profile.username} Lingeshwaran </h3>
    </div>

        <p>{profile.email} lingeshwaran@gmail.com </p>

        </div>
    </div>

    </> );
}

export default Profile;