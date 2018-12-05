import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import createLogger from '../plugin/logger';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        todo: todo
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
