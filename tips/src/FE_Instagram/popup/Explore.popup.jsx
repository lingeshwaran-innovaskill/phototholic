import { useState } from "react";
import Popup1 from "../popup2/popup2";
import uuid from "react-uuid";

function ExplorePopup( { media , index , hide } ){

    const [ slidenum , setSlidenum ] = useState(index);

    const forward = () =>{
        setSlidenum(slidenum === media.length-1 ? 0 : slidenum + 1);
        console.log(Math.floor(uuid()) , uuid());
    }

    const backward = () =>{
        setSlidenum(slidenum === 0 ? media.length-1 : slidenum - 1)
    }

    const [imgArr , setImgArr] = useState(0);

    const back = () =>{
        setImgArr(imgArr == 0 ? media[slidenum].img.length-1: imgArr - 1)
    }

    const fore = () =>{
        setImgArr(imgArr == media[slidenum].img.length-1 ? 0 : imgArr + 1)
    }

    const HidePopup = () =>{
        hide(false)
    }

    const [icon , setIcon] = useState(false);

    const changeIcon = () => {
        setIcon(!icon)
    }

    const [bookmark , setBookMark] = useState(false);

    const bookMarks = () => {
        setBookMark(!bookmark)
    }

    const [postDetails  ,  setPostDetails] = useState(false);

    const showPostDetail = () => {
        setPostDetails(!postDetails)
    }


return (<>

{
    postDetails && 
    <Popup1 showPostDetail={showPostDetail} /> 
}

<div className="Explore-popup-body">

    <div className="cut">
        <i class="fa-regular fa-x" onClick={HidePopup} title="Close"></i>
    </div>

    <div className="backward">
        <i class="fa-solid fa-less-than" onClick={backward} ></i>
    </div>

<div className="Explore-media-popup">

    <div className="media-content">

        <div className="vdo">

            {media[slidenum].img ?
                <div>

                {media[slidenum].img.length != 1 ?

                <div className="imgArr">
                    {imgArr == 0 ?
                    ""
                    :
                    <i class="fa-solid fa-less-than back" onClick={back}></i> 
                    }
                <img src={media[slidenum].img[imgArr]} alt="error" />
                    <i class="fa-solid fa-greater-than fore" onClick={fore} ></i>
                </div>

                :
                <img src={media[slidenum].img} />
                }
                </div>
                :
                <video src={media[slidenum].videos} controls autoPlay={true}/>
            }

        </div>

    <div className="media-description">

        <div className = "profile">
            <div className="media-profile-title">
            <img src = {media[slidenum].profile} />
            <p>  {media[slidenum].profileName}  <span> Follow </span> </p>
            </div>
            <i class="fa-solid fa-ellipsis" onClick={showPostDetail}></i>
        </div>

        <div className="comment">

        <div className="comment-1">

            <div className="img">
                <img src = {media[slidenum].profile}/>
            </div>
            <div className="comment-description">
                <p> {media[slidenum].profileName} </p>
                <h4> {media[slidenum].quotes} </h4>
                <em> {media[slidenum].hash} </em>
            </div>

        </div>

            <div className="comment-2">

                <div className="cmt-body">
                    <div className="image-tag">
                        <img src={media[slidenum].profile} />
                    </div>
                    <div className="cmt">
                        <p>{media[slidenum].commentName}</p>
                        <h6>{media[slidenum].comment}</h6>
                    </div>
                </div>

            </div>

        </div>

        <div className="react">

                <div className="react-icons">
                <div className="left-icons">
                {icon ?
                <i class="fa-solid fa-heart like" onClick={changeIcon}></i>
                :
                <i class="fa-regular fa-heart" onClick={changeIcon}></i>
                }
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
                </div>

                <div className="right-icons">
                {bookmark ?
                <i class="fa-solid fa-bookmark"   onClick={bookMarks}></i>
                :
                <i class="fa-regular fa-bookmark" onClick={bookMarks}></i>
                }
                </div>
                </div>

                <h6> {media[slidenum].likes} likes</h6>
                <em> {media[slidenum].date} </em>

        </div>

        <div className="type-comment">

                <div className="type-comment-1">
                <i class="fa-regular fa-face-smile"></i>
                <input type="text" id="inp" placeholder="Add a Comment..." />
                </div>

                <p>post</p>

        </div>

    </div>
    </div>

</div>

<div className="forward">

<i class="fa-solid fa-greater-than" onClick={forward}></i>

</div>

</div>

</>)
}

export default ExplorePopup;
