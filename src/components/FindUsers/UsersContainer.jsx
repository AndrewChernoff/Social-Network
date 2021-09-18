import React from "react";
import { follow, unfollow, getUser } from "../../redux/usersReducer";
import { connect } from 'react-redux'
import Users from "./Users";
import { WithAuthRedirectComponent } from "../HOC/WithAuthRedirect";
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/usersSelectors";

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        let { pageSize, currentPage } = this.props
        this.props.getUser(pageSize, currentPage);
    }

    onPageChanged = (pageNumber) => {
        let { pageSize } = this.props
        this.props.getUser(pageSize, pageNumber);
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

export default compose(
    WithAuthRedirectComponent,
    connect(mapStateToProps, { follow, unfollow, getUser }))
    (UsersContainer)