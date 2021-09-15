import React from 'react';
import { logoutUser } from '../../redux/authReducer';
import Header from './Header';
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
   

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.userAuth.isAuth,
    login: state.userAuth.login
}
)

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);