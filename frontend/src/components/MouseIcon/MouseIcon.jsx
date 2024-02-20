// MouseIcon.jsx
import React from 'react';
// import  emoji  from '../../Images/fly.gif'
import './MouseIcon.css'
const MouseIcon = ({ mousePosition }) => (
  <div className="mouse-icon" style={{borderBottomLeftRadius:'300px',borderTopRightRadius:'300px',fontFamily:'Hanged', boxShadow:'2px 2px 1px 1px rgb(129, 50, 0)' ,color:'rgb(129, 41, 0)', zIndex: 9999, position: 'fixed',fontSize:'12px',fontWeight:'900', pointerEvents:'none', padding:'4px',  margin:'18px' ,letterSpacing:'2px',backgroundColor:'rgb(212, 238, 180)' , left: mousePosition.x, top: mousePosition.y }}>
    AMU  
     
  </div>
);

export default MouseIcon;
