import * as auth from '../../helpers/auth_header';

const user = auth.getLoggedInUser();

const state = {
	currentUser: user,
    isLoggedIn: !!user,
    token: localStorage.getItem('access_token')
};

const getters = {
    isLoggedIn(state)
    {
        return state.isLoggedIn;
    },
    currentUser(state)
    {
        return state.currentUser;
    },
    token(state)
    {
        return state.token;
    }
};


const actions = {
	saveToken ({ commit }, payload)
	{
		commit('SAVE_TOKEN', payload);
	},

	removeToken ({ commit })
	{
		commit('REMOVE_TOKEN');
	}
};

const mutations = {
	SAVE_TOKEN(state, token)
	{
		state.isLoggedIn = true;
		state.token = token.access_token;
		state.currentUser = Object.assign({}, token.user, {token: token.access_token});
		localStorage.setItem('access_token', JSON.stringify(state.currentUser));
	},

	REMOVE_TOKEN(state, token)
	{
		state.isLoggedIn = false;
		state.token = null;
		state.currentUser = null;
		localStorage.removeItem('access_token');
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}