
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Image/todo.jpeg'; 

const Home = () => {
    const homePageStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '150vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end', 
      paddingRight: '10px', 
      color: 'white',
      textAlign: 'right', 
    };
  

    const buttonStyle = {
        backgroundColor: '#007bff', 
        color: 'white',
        border: 'none', 
        padding: '10px 20px', 
        fontSize: '16px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        textDecoration: 'none',
        display: 'inline-block', 
        marginTop: '20px', 
      };
    
      return (
        <div style={homePageStyle}>
          <h1>Schedule Your Daily Task With<br/>ToDo!</h1>
          <Link to="/app" style={buttonStyle}>
            Go to your ToDo
          </Link>
        </div>
      );
    };
    
    export default Home;
