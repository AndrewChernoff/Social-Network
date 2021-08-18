import axios from 'axios';
import React from 'react';
import { setUserData } from '../../redux/authReducer';
import Header from './Header';
import { connect } from 'react-redux'
import s from './Header.module.css';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(response => {
            debugger
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