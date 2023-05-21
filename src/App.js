import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import { createBrowserHistory } from 'history';
import { connectWithSocketIOServer } from './utils/wss';

const history = createBrowserHistory();
function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, [])

  return (
    <Router history={history}>
      <Routes>
        <Route path="/join-room" element={
          <JoinRoomPage />
        }>
        </Route>
        <Route path="/room" element={
          <RoomPage />
        }>
        </Route>
        <Route path="/" element={
          <IntroductionPage />
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
