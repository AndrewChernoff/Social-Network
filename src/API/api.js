import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd66327ed-6b77-485d-934e-ec9d8785c19c'
    },
    withCredentials: true
})


export let UserAPI = {
    getUsers(pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`, {}
        )
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

     getProfile(userId) {
        console.log('obsolete method')
        return profileAPI.getProfile(userId)
    } 
}

export const profileAPI = {
     getProfile(userId) {
        return instance.get(`profile/` + userId)
    }, 

    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`/profile/status`, { status: status })
    }
    
}

export let AuthUserAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}