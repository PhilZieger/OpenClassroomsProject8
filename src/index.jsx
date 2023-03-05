import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import App from './pages/App';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/" element={<App/>}></Route> */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)