import React from "react";
import Profile from "./profile/profile";
import myWonderfulImage from "./profile.jpeg"

var styleImg = {width : "130px", borderRadius : "50%"} // style for the image

const App = () => (
  <div style={{width:"40%", margin :"30px auto ", padding:"20px 0" ,border :"3px solid black", borderRadius : "5%",backgroundColor : "rgb(125, 125, 125)"}}>
    
    <Profile  fullName= 'AIT TAAKAT AZEDDINE' bio = 'Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de tex' profession='Full Stack Web Developer'>
       <img style={styleImg} src={myWonderfulImage} alt="profile"/> 
    </Profile>
    
    <div>
      <HandleName  fullName= 'AIT TAAKAT AZEDDINE' />
    </div>

  </div>
 );


// function handlename for alert 
 const HandleName  = props => {
  return (
    <button onClick={() => alert(`Say my name : ${props.fullName}`)}>
      Click for Alert
    </button>
  );
 };

export default App;
