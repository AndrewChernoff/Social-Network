import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux'
import { getAuthUserData } from './redux/authReducer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader';
import { compose } from 'redux';

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/FindUsers/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/MyPosts/ProfileContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/message' render={() => <Dialogs />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginContainer />} />
          </Suspense>
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

const AppContainer = compose(connect(mapStateToProps, { getAuthUserData, initializeApp }))(App)

export default connect(mapStateToProps, { getAuthUserData, initializeApp })(AppContainer);