import axios from 'axios';

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.auth.currentUser;
    
        if(requiresAuth && !currentUser)
        {
            next('/login');
        }
        else if(to.path == '/login' && currentUser)
        {
            next('/');
        }
        else
        {
            next();
        }
    });

    if (store.getters.currentUser)
    {
        setAuthorization(store.getters.currentUser.token);
    }
    else
    {
        localStorage.removeItem('access_token');
    }
}

export function setAuthorization(token)
{
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export function getLoggedInUser()
{
    const user = localStorage.getItem('access_token');
    if (!user)
    {
        return null;
    }
    return JSON.parse(user);
}