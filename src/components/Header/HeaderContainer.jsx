import React from 'react';
import { getAuthUserData } from '../../redux/authReducer';
import Header from './Header';
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);