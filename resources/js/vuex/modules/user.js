import axios from 'axios';
import * as auth from '../../helpers/auth_header';

const user = auth.getLoggedInUser();

const state = {
	users: [],
	user: {}
};

const getters = {
	users(state)
    {
        return state.users;
    },
};

const actions = {
	loadUsers ({commit}, params)
	{
		return new Promise((resolve, reject) => {
			axios.get('/api/user')
			.then(response => {
				commit('LOAD_USERS_OK', response.data)
				resolve()
			})
			.catch(error => {
				reject(error.response)
			})
		})
	},

	insertUser ({commit}, form)
	{
		return new Promise((resolve, reject) => {
			axios.post('/api/user', form)
			.then(response => {
				commit('INSERT_USER_OK', response.data)
				resolve()
			})
			.catch(error => {
				reject(error.response.data)
			})
		})
	},

	viewUser ({commit}, id)
	{
		return new Promise((resolve, reject) => {
			axios.get('/api/user/' + id)
			.then(response => {
				commit('LOAD_USER_OK', response.data)
				resolve()
			})
			.catch(error => {
				reject(error.response)
			})
		})
	},

	updateUser ({commit}, {id, form})
	{
		return new Promise((resolve, reject) => {
			axios.put('/api/user/' + id, form)
			.then(response => {
				commit('UPDATE_USER_OK', response.data)
				resolve()
			})
			.catch(error => {
				reject(error.response.data)
			})
		})
	},

	deleteUser ({commit}, id)
	{
		return new Promise((resolve, reject) => {
			axios.delete('/api/user/' + id)
			.then(response => {
				resolve()
			})
			.catch(error => {
				reject(error.response)
			})
		})
	},

	search ({commit}, query)
	{
		return new Promise((resolve, reject) => {
			axios.get('/api/findUser?q=' + query)
			.then(response => {
				commit('SEARCH_OK', response.data.data)
				resolve()
			})
			.catch(error => {
				reject(error)
			})
		})
	},
};

const mutations = {
	LOAD_USERS_OK(state, users)
	{
		state.users = users;
	},

	INSERT_USER_OK (state, user)
	{
		state.user = user;
	},

	LOAD_USER_OK(state, user)
	{
		state.user = user;
	},

	UPDATE_USER_OK (state, user)
	{
		state.user = user;
	},

	SEARCH_OK (state, users)
	{
		state.users = users;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}