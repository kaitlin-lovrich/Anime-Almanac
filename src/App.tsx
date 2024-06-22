import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import TitlePage from './pages/TitlePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/title-page/:id" element={<TitlePage />} />
      </Route>
    </Routes>
  );
}
