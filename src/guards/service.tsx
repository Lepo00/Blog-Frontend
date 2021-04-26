export const isLoggedIn = ():boolean => {
    return sessionStorage.getItem('jwt')!=null || localStorage.getItem('jwt')!=null;
};

export const isAdmin = ():boolean => {
    return sessionStorage.getItem('role')==='ADMIN';
};
