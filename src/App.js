import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Dashbord from './components/pages/Dashbord';
import { AddProvider } from './addContext/AddContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './components/pages/Detail';
import GetPostData from './components/pages/GetPostData';


function App() {
  return (
   <BrowserRouter>
   <AddProvider>
 <Routes>
 <Route path="/" element={<Main />}>
 <Route index element={<Dashbord />} />
 <Route path='detail/:id' element={<Detail />} />
 <Route path='get-post-detail/:id' element={<GetPostData/>} />
 </Route>
 </Routes>
 </AddProvider>
   </BrowserRouter>
  );
}

export default App;
