import './App.css';
import { Route, Routes } from "react-router-dom";

import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPage';
import RatingsPage from './pages/ratingsPage';

function App() {

  return (
    <Routes>
      <Route index element={<IndexPage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ratings" element={<RatingsPage />} />
    </Routes>
  )
}

export default App
