// initial state
const state = {
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
};

// getters
const getters = {
    completedTodo: (state) => {
        return state.todos.filter(todo => todo.status);
    },
    incompletedTodo: (state) => {
        return state.todos.filter(todo => !todo.status);
    }
};

// actions
const actions = {
    addTodo({commit}, todo) {
        let newTodo = {
            title: todo.title,
            description: todo.description,
            status: false
        };
        commit('ADD_TODO', newTodo);
    },
    completeTodo({commit}, todo) {
        commit('COMPLETE_TODO', todo);
    },
    deleteTodo({commit}, todo) {
        commit('DELETE_TODO', todo);
    },
};

// mutations
const mutations = {
    ADD_TODO(state, todo) {
        state.todos.push(todo);
    },
    COMPLETE_TODO(state, todo) {
        let todoEl = state.todos.find(
            item => item.title + item.description === todo.title + todo.description
        );
        todoEl.status = true;
    },
    DELETE_TODO(state, todo) {
        let todoElIndex = state.todos.findIndex(
            item => item.title + item.description === todo.title + todo.description
        );
        state.todos.splice(todoElIndex, 1);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
