import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b49b9dd7-8e2c-4c41-b9f5-9d544e361570'
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
        return instance.get(`profile/` + userId)
    }
}

export let AuthUserAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}