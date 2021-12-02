

export const login = (username) => {
    localStorage.setItem('username', username)
}

export const getUser = () => {
    let username = sessionStorage.getItem('username')
    let userId = sessionStorage.getItem('userId')
    let userData = { username, userId }

    //return username;
    return userData;
};

// export const logout = () => {
//     localStorage.removeItem('username');
// };