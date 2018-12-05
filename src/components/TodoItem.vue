<template>
	<div class="card" v-if="todo">
		<div class="card-header card-title">{{todo.title}}</div>
		<div class="card-body">{{todo.description}}</div>
		<div class="card-footer d-flex justify-content-center">
			<button
							@click="completeTodo(todo)"
							v-if="!todo.status"
							class="btn btn-success mr-2">Mark as Completed
			</button>
			<button
							@click="deleteTodo(todo)"
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
                'completeTodo',
								'deleteTodo'
						]),
        }
    }
</script>

<style scoped>

</style>