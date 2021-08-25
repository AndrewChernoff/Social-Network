import axios from 'axios';
import React from 'react';
import { setUserData } from '../../redux/authReducer';
import Header from './Header';
import { connect } from 'react-redux'
import s from './Header.module.css';
import { authMe } from '../../API/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        debugger
        authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        }
        )
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer);