// Tasks module
import axios from 'axios';

const resource_uri = "https://run.mocky.io/v3/ae81604d-ee4d-4408-b64d-a0f10d667972";

const state = {
    applicants: []
};

const getters = {
    allApplicants: state => state.applicants
};

const actions = {
    async fetchApplicants({ commit }) {
        const response = await axios.get(resource_uri);
        commit('setApplicants', response.data);
    },
};

const mutations = {
    setApplicants: (state, applicants) => state.applicants = applicants,
};

export default {
    state, getters, actions, mutations
}