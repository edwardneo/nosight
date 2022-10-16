import {Routes, Route, useNavigate} from 'react-router-dom';
import Capture from './capture/capture';
import View from './view/view';

export default function App() {
  const navigate = useNavigate();

  const navigateToCapture = () => {
    navigate('/capture');
  };

  const navigateToView = () => {
    navigate('/view');
  };

  return (
    <div>
      <div>
        <button onClick={navigateToCapture}>Take photos</button>
        <hr />
        <button onClick={navigateToView}>View photos</button>

        <Routes>
          <Route path="/capture" element={<Capture />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </div>
  );
}