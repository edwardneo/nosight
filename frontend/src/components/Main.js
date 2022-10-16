import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './homepage';
import Capture from './capture';
import View from './view';

export default function Main({ token, setToken }) {
    return ( 
        <Router>
            <Routes>
            <Route path='/' element={<Homepage setToken={setToken} />} exact></Route>
            <Route path='/capture' element={token !== 'capture' ? <Navigate to="/" /> : <Capture />}></Route>
            <Route path='/view' element={token !== 'view' ? <Navigate to="/" /> : <View />}></Route>
            </Routes>
        </Router>
      );
}