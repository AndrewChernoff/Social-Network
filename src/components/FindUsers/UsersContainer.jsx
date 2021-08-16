import React from "react";
import { follow, unfollow, setUsers, setCurrentPages, setUsersTotalCount, toggleIsFetching } from "../../redux/usersReducer";
import { connect } from 'react-redux'
import Users from "./Users";
import * as axios from 'axios';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPages(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
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
        />
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPages, setUsersTotalCount,
    toggleIsFetching
})(UsersContainer);