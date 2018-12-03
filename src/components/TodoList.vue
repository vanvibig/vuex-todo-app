<template>
	<div>
		<div v-if="todos">
			<todo-item
							v-for="(todo, index) in todos"
							:key="index"
							:todo="todo"></todo-item>
		</div>
	</div>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "todo-list",
        components: {TodoItem},
        props: {
            completed: Boolean
        },
        computed: {
            todos() {
                if (this.completed) {
                    return this.$store.getters.completed;
                }
                return this.$store.getters.incompleted;
            }
        }
    }
</script>

<style>

</style>