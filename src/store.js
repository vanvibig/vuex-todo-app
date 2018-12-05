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
    actions: {
        ADD_TODO({commit}, todo) {
            let newTodo = {
                title: todo.title,
                description: todo.description,
                status: false
            };
            commit('ADD_TODO_MUTATION', newTodo);
        },
        COMPLETE_TODO({commit}, todo) {
            commit('COMPLETE_TODO_MUTATION', todo);
        },
        DELETE_TODO({commit}, todo) {
            commit('DELETE_TODO_MUTATION', todo);
        },
    },
    getters: {
        completed: (state) => {
            return state.todos.filter(todo => todo.status);
        },
        incompleted: (state) => {
            return state.todos.filter(todo => !todo.status);
        }
    },
    mutations: {
        ADD_TODO_MUTATION(state, todo) {
            state.todos.push(todo);
        },
        COMPLETE_TODO_MUTATION(state, todo) {
            let todoEl = state.todos.find(
                item => item.title + item.description === todo.title + todo.description
            );
            todoEl.status = true;
        },
        DELETE_TODO_MUTATION(state, todo) {
            let todoElIndex = state.todos.findIndex(
                item => item.title + item.description === todo.title + todo.description
            );
            state.todos.splice(todoElIndex, 1);
        }
    }
});
