import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Layouts from './components/basicComponents/layouts';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
    <Route path='/' element= {<Layouts />} >
      <Route index element={<HomePage />} />
      {/*<Route path='login' element={<LoginPage />} />*/}
      {/*<Route path='about' element={<AboutPage />} />*/}
      {/*<Route path='contacts' element={<ContactsPage />} />*/}
      {/*<Route path='customers' element={<ObjectsPage />} />*/}
      {/*<Route path='category' element={<CategoryPage />} />*/}
      {/*<Route path='cardhousedetail/:id/' element={<CardhouseDetailPage />} />*/}
    </Route>
  </Routes>
  );
}

export default App;
