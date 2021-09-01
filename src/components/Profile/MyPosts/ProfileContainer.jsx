import React from 'react';
import Profile from '../Profile';
import { getUserProfile } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { WithAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) {return <Redirect to='/login'/>}

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.myPostPage.profile
    }
}

export default compose (
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    WithAuthRedirectComponent
) (ProfileContainer)