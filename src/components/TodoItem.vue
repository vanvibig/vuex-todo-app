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
							class="btn btn-danger">Delete
			</button>
		</div>
	</div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "todo-item",
        props: {
            todo: {title: String, description: String}
        },
        methods: {
            ...mapActions('todo',[
                'COMPLETE_TODO',
								'DELETE_TODO'
						]),
            completedTodo() {
                this.COMPLETE_TODO(this.todo);
            },
            deleteTodo() {
                this.DELETE_TODO(this.todo);
            },
        }
    }
</script>

<style scoped>

</style>