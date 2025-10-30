import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recommend from './pages/recommend/Recommend';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
