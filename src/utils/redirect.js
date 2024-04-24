export const storeRedirectUrl = (url) => {
    localStorage.setItem('redirectUrl', url);
};


export const getAndRemoveRedirectUrl = () => {
    const redirectUrl = localStorage.getItem('redirectUrl');
    localStorage.removeItem('redirectUrl');
    return redirectUrl;
};