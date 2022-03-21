import './App.css';
import MainBody from './components/mainBody';
import NavBar from './components/navbar';
import React, {createRef} from 'react';
import {useScreenshot, createFileName} from 'use-react-screenshot'


const App = () => {

    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = "success-metrics-report", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    function downloadScreenshot() {
      takeScreenShot(ref.current).then(download);
    }

  return (

    <div 
      className="App df jcc aic fdc"
      ref={ref}
    >
      <NavBar/>
      <div>
        <button className="screenshot" onClick={() => downloadScreenshot()}>Take Screenshot</button>
        
      </div>
      <MainBody/>
    </div>
  );
}

export default App;
