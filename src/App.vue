<template class="row">
	<div class="container col-8">
		<h1 class="d-flex justify-content-center">
			<span>Todo app</span>
			<small>using Vuex</small>
		</h1>

		<form @submit="createTodo" autocomplete="off">
			<label for="title">Title</label>
			<input
							v-model="title"
							id="title" type="text" class="form-control" required>
			<label for="description">Description</label>
			<textarea
							v-model="description"
							id="description"
							class="form-control"
							rows="2"
							required></textarea>
			<br>
			<button class="btn btn-success" type="submit">Submit</button>
		</form>
		<br>
		<hr>
		<div class="row">
			<div class="col-6">
				<h4 class="text-center">Completed</h4>
				<todo-list :completed="true"></todo-list>
			</div>
			<div class="col-6">
				<h4 class="text-center">Pending</h4>
				<todo-list :completed="false"></todo-list>
			</div>
		</div>
	</div>
</template>

<script>

    import TodoList from "./components/TodoList";
    import {mapActions} from 'vuex';

    export default {
        name: 'app',
        components: {TodoList},
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            ...mapActions('todo',[
                'ADD_TODO'
						]),
            createTodo(e) {
                e.preventDefault();
                this.ADD_TODO(this);
                this.title = this.description = '';
                console.log(this.$store.getters['todo/completed']);
            }
        }
    }
</script>

<style lang="scss">
</style>
