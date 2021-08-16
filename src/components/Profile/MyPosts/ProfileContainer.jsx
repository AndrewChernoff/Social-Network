import React from 'react';
import Profile from '../Profile';
import * as axios from 'axios';
import { setUserProfileAC } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
    
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
        debugger
    this.props.setUserProfile(response.data)
    })
}

    render() {
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
////////////
let mapStateToProps = (state) => {
    debugger
return {
     profile: state.myPostPage.profile
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => (dispatch(setUserProfileAC(profile)))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProfileContainer)