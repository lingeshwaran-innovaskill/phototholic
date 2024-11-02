import Review from '../googleReview/review';
import './innova.css';



function OwnContent(){


    return (<>

    <div className="inn-content-main">

        <div className="inn-content-head">
                <h1> Why to Opt Innovaskill ? </h1>
        </div>

        <div className='inn-content-body'>
            <div className='inn-content'>
                    <h2> html </h2>
                    <h2> css </h2>
                    <h2> javascript </h2>
                    <h2> react </h2>
                    <h2> node js </h2>
                    <h2> express js </h2>
            </div>
        </div>

    <DevTitle/>

    </div>

    </>);
}

export default OwnContent;

function DevTitle() {

    
    return ( <>
    <div className='Devtitle'>

        <div className='dev-title-head'>
            <h1> Our Training and Development Program : </h1>
        </div>

        <div className='dev-title-body'>
            <div className='dev-content-div'>
                <h2> Content </h2>
                <h2> Content </h2>
                <h2> Content </h2>
                <h2> Content </h2>
            </div>
        </div>

    </div>


    </> );
}
