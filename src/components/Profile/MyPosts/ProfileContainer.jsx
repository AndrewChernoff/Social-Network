import React from 'react';
import Profile from '../Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { WithAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 19005;
        }
        
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if(!this.props.isAuth) {return <Redirect to='/login'/>}

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    
    return {
        profile: state.myPostPage.profile,
        status: state.myPostPage.status
    }
}

export default compose (
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    WithAuthRedirectComponent
) (ProfileContainer)