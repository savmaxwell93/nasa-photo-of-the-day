import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';
import axios from "axios";

function App() {
  const [nasaInfo, setNasaInfo] = useState('');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=wofgPnCUCnk2xaYGSVmJTWJk7dbEldiV5UdAncCC')
    .then(res => {
      setNasaInfo(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

    return (
      <div className="App">
        {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p> */}
        <Header nasaDate={nasaInfo} />
        <Image nasaTitle={nasaInfo} nasaImg={nasaInfo} nasaExplanation={nasaInfo} />
        <Footer nasaCopyright={nasaInfo} />
      </div>
    );
}

export default App;
