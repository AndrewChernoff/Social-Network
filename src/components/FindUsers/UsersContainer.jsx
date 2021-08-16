import React from "react";
import { followAC, unfollowAC, setUsersAC, setCurrentPagesAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import { connect } from 'react-redux'
import Users from "./Users";
import * as axios from 'axios';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPages: (pageNumber) => { dispatch(setCurrentPagesAC(pageNumber))},
        setUsersTotalCount: (totalCount) => { dispatch(setUsersTotalCountAC(totalCount))},
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPages(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {   
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
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);