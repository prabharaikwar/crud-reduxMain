import './App.css';
import EditUserContainer from './containers/EditUserContainer';
import AddUserContainer from './containers/AddUserContainer';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from '../src/containers/HeaderContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/edit/:userId' element={<EditUserContainer />} />
        <Route path='/add' element={<AddUserContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
