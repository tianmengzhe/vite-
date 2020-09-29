<template>
  <div class="">
    <!-- 新增 -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="今日待办"
      autocomplete="off"
    />

    <!-- 列表 -->
    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="{completed:todos.completed,editing:todos.isEdit}">
          
          <div v-show="!todo.isEdit">
               <input type="checkbox" v-model="todo.completed" />
                <label for="" @dblclick="todo.isEdit = true">{{ todo.title }}</label>
                <button @click="removeTodo(todo)">x</button>
          </div>

        <!-- 编辑 -->
        <input v-show="todo.isEdit" type="text" v-model="todo.title" @blur="doneEdit(todo)"  @keyup.enter="doneEdit(todo)" @keyup.escape="doneEdit(todo)">
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "",
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [],
    });

    const addTodo = () => {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false,
        isEdit: false
      });
      state.newTodo = "";
    };

    const removeTodo = (todo) => {
      state.todos.splice(state.todos.indexOf(todo), 1);
    };

    const doneEdit = (todo) => {
      todo.isEdit = false
    };
    return {
      addTodo,
      removeTodo,
      doneEdit,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.completed label{
    text-decoration:line-through;
}
.editing{

}
</style>