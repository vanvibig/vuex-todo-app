<template>
	<div>
		<div v-if="todosFilterd">
			<todo-item
							v-for="(todo, index) in todosFilterd"
							:key="index"
							:todo="todo"></todo-item>
		</div>
	</div>
</template>

<script>
    import TodoItem from "./TodoItem";
    import {mapGetters} from 'vuex';

    export default {
        name: "todo-list",
        components: {TodoItem},
        props: {
            completed: Boolean
        },
        computed: {
            ...mapGetters('todo', {
                completedTodos: 'completed',
                incompletedTodos: 'incompleted'
            }),
            todosFilterd() {
                if (this.completed) {
                    return this.completedTodos;
                }
                return this.incompletedTodos;
            }
        },
    }
</script>

<style>

</style>