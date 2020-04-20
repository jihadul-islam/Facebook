import React from 'react';
import './App.css';
import AllUser from '../src/Component/AllUser/AllUser';
import firebaseConfig from '../src/firebaseConfig';

import '../src/'
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);


function App() {
  
  return (
  
    <div>
  
    <div className= "App"> <h1>Facebook</h1></div>
    
   
     
    
    
    <AllUser></AllUser>
    
    </div>
    
  );
  
}

export default App;
