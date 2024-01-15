import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
