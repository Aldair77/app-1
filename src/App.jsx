import ShowProducts from './components/ShowProducts';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProducts>xd</ShowProducts>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
