import { useState } from 'react';
import Capture from './capture/capture';
import View from './view/view';

export default function App() {
  const [display, setDisplay] = useState("default");

  const render = () => {
    if (display === "default") {
      return (
        <div>
          <div>
            <button onClick={() => setDisplay("capture")}>Take photos</button>
            <button onClick={() => setDisplay("view")}>View photos</button>
          </div>
        </div>
      )
    } else if (display === "capture") {
      return (
        <Capture />
      )
    } else if (display === "view") {
      return (
        <View />
      )
    }
  }

  return (
    render()
  );
}