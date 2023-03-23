import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import MainHome from './MainHome';
import {BrowserRouter } from 'react-router-dom'
function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainHome />
      </div>
    </BrowserRouter>
  );
}

export default App;
