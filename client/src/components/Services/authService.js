export const register = () => {

}


export const login = (username) => {
    localStorage.setItem('username', username)
}

export const getUser = () => {
    let username = sessionStorage.getItem('username')

    return username;
};

export const logout = () => {
    localStorage.removeItem('username');
};