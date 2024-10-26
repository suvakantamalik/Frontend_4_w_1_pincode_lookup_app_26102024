import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import SearchHistory from './components/SearchHistory';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/history" element={<SearchHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
