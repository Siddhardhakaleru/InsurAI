//import './App.css'
import Dashboard from './components/Dashboard';
import Header from './components/header';
import { Route ,Routes  } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import NoMatch from './components/NoMatch';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginForm/>}/>
         <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>
  )
}

export default App
