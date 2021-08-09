import { followAC, unfollowAC, setUsersAC, setCurrentPagesAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import Users from "./Users";
import { connect } from 'react-redux'

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;