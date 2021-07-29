const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETU_SERS';

let initialState = {
    users: [/* 
        {
            id: 1, 
            userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
            followed: false,
            fullName: 'Andrew Chernoff',
            status: 'That\'s not "null" but "undefined", beutiful life, sunshine',
            location: { country: 'USA', city: 'Los Angeles' }
        },
        {
            id: 2,
            userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
            followed: false,
            fullName: 'Serega Rastorguev',
            status: 'That was it',
            location: { country: 'USA', city: 'Miami' }
        },
        {
            id: 3,
            userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
            followed: true,
            fullName: 'Dmitry Uspeshny',
            status: 'wine, fish, nature',
            location: { country: 'Spain', city: 'Ibiza' }
        },
        {
            id: 4,
            userPhoto: 'http://www.body-builder.info/wp-content/uploads/2017/08/d2.jpg',
            followed: true,
            fullName: 'Ali Abdulloev',
            status: 'Asalam Aleikum, pharmacists',
            location: { country: 'Germany', city: 'Berlin' }
        } */
    ]
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
                users: [...state.users, ...action.users] 
            }
    }
    return state;
}

export const followAC = (userID) => { return { type: FOLLOW, userID } };
export const unfollowAC = (userID) => { return { type: UNFOLLOW, userID } };
export const setUsersAC = (users) => { return { type: SET_USERS, users } };