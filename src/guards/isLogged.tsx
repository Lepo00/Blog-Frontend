export const isLoggedIn = ():boolean => {
    return sessionStorage.getItem('jwt')!=null || localStorage.getItem('jwt')!=null;
};