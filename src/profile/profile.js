import React from 'react';
import PropTypes from "prop-types";

const profile = props =>{
        return (
            <>
            <div style={{color: "white", textAlign: "center"}}>    
                <h3> <span style={{textDecoration : "underline",color: "black" }}>WELCOME ..</span>   {props.fullName}</h3>
                <hr></hr>
                <h3> <span style={{textDecoration : "underline",color: "black" }}>BIO : </span> {props.bio}</h3>
                <hr></hr>
                <h3> <span style={{textDecoration : "underline",color: "black" }}>PROFESSION :</span> {props.profession}</h3>
                <hr></hr>
            {/* image as a child part*/}
                <img src={props.src} />
                {props.children} 
            {/* image as a child part*/}    
            </div> 
            </>
        )
    }

//default props for Profile component. 
    profile.defaultProps = {
        fullName: "Azeddine",
        bio:"default one",
        profession:"developer",
       };

//PropsType to check props.         
    profile.propTypes = {
        anyProp: PropTypes.any,
        booleanProp: PropTypes.bool,
        numberProp: PropTypes.number,
        stringProp: PropTypes.string,
        functionProp: PropTypes.func
    };   

export default profile;
