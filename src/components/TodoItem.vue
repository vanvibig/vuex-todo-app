<template>
	<div class="card" v-if="todo">
		<div class="card-header card-title">{{todo.title}}</div>
		<div class="card-body">{{todo.description}}</div>
		<div class="card-footer">
			<button class="btn btn-success mr-2">Mark as Completed</button>
			<button class="btn btn-danger">Delete</button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "todo-item",
        props: {
            todo: {title: String, description: String}
        },
        methods: {
            completedTodo() {

            },
            deleteTodo() {

            },
        }
    }
</script>

<style scoped>

</style>