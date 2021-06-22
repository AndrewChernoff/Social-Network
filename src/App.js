import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/ProfileF/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
 
function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      
      <Route path='/profile' component={Profile}/>
      <Route path='/message' component={Dialogs}/> 
      <Route path='/news' component={News}/> 
      <Route path='/music' component={Music}/>  
      <Route path='/settings' component={Settings}/>  
       
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
