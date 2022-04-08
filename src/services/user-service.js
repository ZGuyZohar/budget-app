import { user } from '../../data/mock-user.js'

export const userService = {
    getUser
}

function getUser() {
    return user
}
