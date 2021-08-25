const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: true
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
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
        return {... state,
            isFetching: action.isFetching
        }
    }
    
    return state;
}

export const follow = (userID) => { return { type: FOLLOW, userID } };
export const unfollow = (userID) => { return { type: UNFOLLOW, userID } };
export const setUsers = (users) => { return { type: SET_USERS, users } };
export const setCurrentPages = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } };
export const setUsersTotalCount = (totalCount) => { return { type: SET_USERS_TOTAL_COUNT, count: totalCount } };
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_FETCHING, isFetching } };