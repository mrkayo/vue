import Vue from 'vue'
import Vuex from 'vuex'
import applicants from './modules/applicant.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    applicants
  }
})
