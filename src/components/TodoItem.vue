<template>
	<div class="card" v-if="todo">
		<div class="card-header card-title">{{todo.title}}</div>
		<div class="card-body">{{todo.description}}</div>
		<div class="card-footer d-flex justify-content-center">
			<button
							@click="completedTodo"
							v-if="!todo.status"
							class="btn btn-success mr-2">Mark as Completed
			</button>
			<button
							@click="deleteTodo"
							class="btn btn-danger">Delete</button>
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
                this.$store.dispatch('COMPLETE_TODO', this.todo);
            },
            deleteTodo() {
                this.$store.dispatch('DELETE_TODO', this.todo);
            },
        }
    }
</script>

<style scoped>

</style>