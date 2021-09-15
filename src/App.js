import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/FindUsers/UsersContainer';
import ProfileContainer from './components/Profile/MyPosts/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux'
import { getAuthUserData } from './redux/authReducer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/message' render={() => <Dialogs />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default connect(mapStateToProps, { getAuthUserData, initializeApp })(App);