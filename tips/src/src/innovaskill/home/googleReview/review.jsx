import './review.css';


function Review(){


return(<>
    {/* <div className="review-main-div">

        <div className="review-head">
            <h1> Our Reviews </h1>
        </div>

        <div className="review-body">
            <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25397403' frameBorder={0} ></iframe>
        </div>
    </div> */}

<div className="review-main-div container my-3" >

<div className="row d-flex justify-content-center align-items-center">

    <div className="col-12 mb-5 review-head">
        <h1 > Our Reviews </h1>
    </div>

    <div className="review col-12 col-lg-10 col-md-10 col-sm-8 d-flex justify-content-center align-items-center">

        <div className="col-10 col-lg-12 col-md-10 col-sm-12 review-body">

            <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25397403' frameBorder={0} ></iframe>

        </div>

    </div>

</div>

</div>

</>)
}
export default Review;