import React from 'react';
import Profile from '../Profile';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { WithAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    updateProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autherizedUser;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);

    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        if (!this.props.isAuth) { return <Redirect to='/login' /> }

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                updateUserStatus={this.props.updateUserStatus} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.myPostPage.profile,
        status: state.myPostPage.status,
        autherizedUser: state.userAuth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)