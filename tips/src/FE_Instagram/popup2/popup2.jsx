import "./popup.css";


function Popup1({showPostDetail}) {

    return( <>

<div className ="account-info" onClick={showPostDetail}>

        <div className="account-info-body">
            <p>Report</p>
            <p>Go to post</p>
            <p>Share to...</p>
            <p>Copy link</p>
            <p>Embed</p>
            <p>About this account</p>
            <p>Cancel</p>
        </div>

</div>

    </> );
}

export default Popup1;
