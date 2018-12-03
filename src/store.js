import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: 'Task 1',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                status: false
            },
            {
                title: 'Task 2',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                status: true
            },
            {
                title: 'Task 3',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                status: false
            },
            {
                title: 'Task 4',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                status: true
            },
        ]
    },
    actions: {},
    getters: {
        completed: (state) => {
            return state.todos.filter(todo => todo.status);
        },
        incompleted: (state) => {
            return state.todos.filter(todo => !todo.status);
        }
    },
    mutations: {}
});
