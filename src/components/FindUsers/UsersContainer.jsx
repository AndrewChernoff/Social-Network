import React from "react";
import { follow, unfollow, getUser} from "../../redux/usersReducer";
import { connect } from 'react-redux'
import Users from "./Users";
import { WithAuthRedirectComponent } from "../HOC/WithAuthRedirect";

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.pageSize, this.props.currentPage);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUser(this.props.pageSize, pageNumber);
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
    }
}

export default WithAuthRedirectComponent(connect(mapStateToProps, {follow, unfollow, getUser})(UsersContainer));