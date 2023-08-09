import './App.css';
import {useState} from "react";
import logo from './pics/logo_long.png'
import planetPic from './pics/planet_white.png'
import backgroundVid from './pics/background_video.mp4'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faHouse, faPhone, faInfo, faShoppingCart, faMusic} from '@fortawesome/free-solid-svg-icons'

let hover = false;
function Background() {
    return (
        <video autoPlay={true} muted={true} loop={true} className={"background-vid"} >
            <source src={backgroundVid} type={"video/mp4"}/>
        </video>
    );
}
function TopSection() {
    return (
        <div className={"top-section-div"}>
            <div className={"logo-div"}>
                <a href={"#"}><img src={logo} className={"logo-pic"} alt={"Picture of the logo"}/></a>
            </div>

            <div className={"demo-div"}>
                <h1>DEMO SITE</h1>
            </div>
        </div>
    );
}

function Circles({setHover, setPicName}) {
    function handleMouseOver(picName) {
        setHover(true);
        setPicName(picName)
    }

    return (
        <div className={"circles-div"} >
            <div className={"sm-circle"} onMouseOver={() => handleMouseOver("home_pic")} >
                <a href={"#"}><FontAwesomeIcon icon={faHouse} className={"big-icon home"}/></a>
            </div>
            <div className={"sm-circle"} onMouseOver={() => handleMouseOver("contact_pic")} >
                <a href={"https://globalrecords.com/contact/"}><FontAwesomeIcon icon={faPhone} className={"big-icon contact"} /></a>
            </div>
            <div className={"sm-circle"} onMouseOver={() => handleMouseOver("about_pic")} >
                <a href={"https://globalrecords.com/about/"}><FontAwesomeIcon icon={faInfo} className={"big-icon info"} /></a>
            </div>
            <div className={"sm-circle"} onMouseOver={() => handleMouseOver("shop_pic")} >
                <a href={"https://shop.globalrecords.com/"}><FontAwesomeIcon icon={faShoppingCart} className={"big-icon shop"} /></a>
            </div>
            <div className={"sm-circle"} onMouseOver={() => handleMouseOver("artists_pic")} >
                <a href={"https://globalrecords.com/our-artists/"}><FontAwesomeIcon icon={faMusic} className={"big-icon artists"} /></a>
            </div>
        </div>
    );
}
function Preview({isHovered, picName}) {
    console.log(picName);
    return (
        <div className={"preview-div"} style={{
            width: isHovered ? '40%' : '',
            border: isHovered ? 'white 10px solid' : '',
            transition: 'width .5s, border .5s'
        }}>
            <img src={require('./pics/' + picName + '.png')} alt={"Picture of about page"} className={"preview-pic about"} style={{
                width: isHovered ? '100%' : '',
            }}/>
        </div>
    );
}

function MainSection() {
    const [isHovered, setHover] = useState(false);
    const [picName, setPicName] = useState('about_pic')
    return (
        <div className={"main-section-div"} >
            <div className={"planet-div"} style={{
                marginLeft: isHovered ? '500px' : ' ',
                transition: 'margin-left .5s'
            }}>
                <img src={planetPic} className={"planet-pic"} alt={"Picture of planet from global records logo"}/>
                <Circles setHover={setHover} setPicName={setPicName}/>
            </div>
            <Preview isHovered={isHovered} picName={picName}/>
        </div>
    );
}

function BottomSection() {
    return (
        <div className={"bottom-section-div"}>
            <SocialMediaIcons />
        </div>
    );
}
function SocialMediaIcons() {
    return (
        <div className={"social-media-div"}>
            <a href={"https://www.facebook.com/GlobalRecordsCom/"} target={"_blank"}> <FontAwesomeIcon className={"sm-icon fb"} icon={faFacebook}/></a>
            <a href={"https://www.instagram.com/globalrecords/?hl=en"} target={"_blank"}> <FontAwesomeIcon className={"sm-icon ig"} icon={faInstagram} /></a>
            <a href={"https://www.youtube.com/user/globalrecords"} target={"_blank"}> <FontAwesomeIcon className={"sm-icon yt"} icon={faYoutube} /></a>
            <a href={"https://www.tiktok.com/@globalrecords"} target={"_blank"}> <FontAwesomeIcon className={"sm-icon tt"} icon={faTiktok} /></a>
            <a href={"https://www.linkedin.com/company/global-records/"} target={"_blank"}> <FontAwesomeIcon className={"sm-icon li"} icon={faLinkedin} /></a>
        </div>
    );
}

function App() {
  return (
    <div className="main-div">
        <Background />
        <TopSection />
        <MainSection />
        <BottomSection />
    </div>
  );
}

export default App;
