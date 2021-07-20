import * as types from '../mutation-types'

const state = {
    users:[],
    user:null,
}
const getters = {
    users: state => state.users,
    user: state => state.user,
}
const actions = {
    addAllUser({commit, state}, data) {
        commit(types.USER_LIST_CHANGE, data)
    },

    selectUser({commit, state}, data) {
        commit(types.USER_SELECT, data)
    },

}
const mutations = {

    [types.USER_LIST_CHANGE](state, data){
        state.users = data;
    },


    [types.USER_SELECT](state, data){
        state.users = data;
    }
   
}

export default {
    state,
    actions,
    mutations,
    getters
}
