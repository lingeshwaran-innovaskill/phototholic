import './location.css';

function Locate(){


    const formSubmit = (e) => {
        e.preventDefault();
    }

    return(<>

    <div className="locate-main">

    <div className="locate-body">

        <div className="map-div">
            <div className='map-div-title'>
                <h2> Banglore Corporate Office Address : </h2> 
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2312.333539299665!2d77.60222470114857!3d12.916334896373034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1561a753b37d%3A0x1ce340f91823652d!2sInnovaskill%20Technologies!5e0!3m2!1sen!2sin!4v1712927533762!5m2!1sen!2sin" width="400" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="map-div-2">
            <div className='map-div-title'> 
                <h2> Chennai Branch Address : </h2> 
            </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.6778835217057!2d80.02110102684479!3d12.797227068833788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f9d564d8eb59%3A0x95ba50c1edcf4b6b!2sInnovaskill%20Maraimalai%20Nagar!5e0!3m2!1sen!2sin!4v1712983250757!5m2!1sen!2sin" width="400" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="user-form" id='contact'>
            <div className='user-form-title'>
                <h2> Contact Us : </h2>
            </div>
            <form onSubmit={formSubmit}>
                <input type='text' placeholder='Name*' required/> <br/>
                <input type='number' placeholder='Contact-Number*' required/> <br/>
                <input type='email' placeholder='Email-ID*' /> <br/>
                <input type='text' placeholder='Education/Qualication*' /> <br/>
                <textarea placeholder='Message*'>

                </textarea>

                <button> Submit </button>
            </form>

        </div>

    </div>
    
    </div>

    </>)
}
export default Locate;