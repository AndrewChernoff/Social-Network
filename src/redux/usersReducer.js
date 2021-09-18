import { UserAPI } from "../API/api";
import { updateObjectInArray } from "../components/common/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWINGPROGRESS = 'TOGGLE_FOLLOWINGPROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
                /* state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                }) */
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, ['id'], { followed: false })
                /* state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                }) */
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWINGPROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
    }
    return state;
}

export const followSuccess = (userID) => { return { type: FOLLOW, userID } };
export const unfollowSuccess = (userID) => { return { type: UNFOLLOW, userID } };
export const setUsers = (users) => { return { type: SET_USERS, users } };
export const setCurrentPages = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } };
export const setUsersTotalCount = (totalCount) => { return { type: SET_USERS_TOTAL_COUNT, count: totalCount } };
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_FETCHING, isFetching } };
export const toggleFollowingProgress = (isFetching, userID) => { return { type: TOGGLE_FOLLOWINGPROGRESS, isFetching, userID } };

export const getUser = (pageSize, currentPage) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true));
        let response = await UserAPI.getUsers(pageSize, currentPage)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setUsersTotalCount(response.data.totalCount));
        dispatch(setCurrentPages(currentPage));
    }
}

export const followUnfollowFlow = (userId, APImethod, actionCreator) => {
    return async dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await APImethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return followUnfollowFlow(userId, UserAPI.unfollowUser, unfollowSuccess)
    /* return async dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await UserAPI.unfollowUser(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    } */
}

export const follow = (userId) => {
    return followUnfollowFlow(userId, UserAPI.followUser, followSuccess)
    /* return async dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await UserAPI.followUser(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    } */
}