import { Login } from './pages/login';
import { Home } from './pages/home';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Feed } from './pages/feed/inde';
import { Register } from './pages/register';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );

}

export default App;
