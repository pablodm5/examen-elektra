import React, { useState, useEffect } from 'react';
import logo from './assets/rick_morty_logo.png';
import './App.css';
import {ListItems} from './components/ListItems';

function App() {
  const imgStyle = { width: "20%" }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function(){
      setIsLoading(false)
  }, 3000);
  }, []);
  return (
    <div >
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
        {
        isLoading ? 
        
        <div id="root">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
        : 
          ''
      }
        
        <>
          <header >
            <div className="overlay">
              <h3><img src={logo} className="imagen" style={imgStyle}/></h3>
            </div>
          </header>
          <div>
                <div className="row-question">
                    <p className="p-question">¿No encuentras tu personaje favorito?</p>
                </div>
            <ListItems/>
          </div>
        </>
    </div>
  );
}

export default App;