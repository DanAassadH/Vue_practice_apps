<template>
  <div class="container">
    <h1 class="mt-8 text-2xl text-center font-extrabold">Todos</h1>

    <div class="mt-3 container md:mx-12">
      <!-- <div class="grid grid-cols-12 gap-4"> -->
      <div class="grid grid-rows gap-4">

<!-- input box -->
        <!-- <div class="col-span-6"> -->
        <div class="row-span-1">
          <div class="p-8 bg-white shadow-md rounded">
            <h2 class="text-xl ">Add a todo</h2>
            <input type="text"
                   v-model="todoText"
                   @keydown.enter="addTodo"
                   class="p-2 mt-2 border rounded w-full">
                  
                    <button class="mt-5 px-2 rounded text-white bg-purple-600 hover:bg-purple-700 "
                     style="width: 200px ; height: 40px"
                      @click="addTodo"
                      title="Add todo">Add</button>
          </div>
        </div>

<!-- todo list -->
        <!-- <div class="col-span-6 space-y-4 overflow-y-auto px-1"
             style="height: 500px"> -->
        <div class="row-span space-y-4 overflow-y-auto px-1"
             style="height: 500px">

          <div v-for="(todo, index) in todos"
               :key="index"
               class="p-2 border bg-white shadow-md rounded flex items-center justify-between"
               :class="{'bg-green-200': todo.done}">
            <div>
              <div :class="{done : todo.done}">{{ todo.text }}</div>
              <!-- <div class="text-gray-500 text-sm">{{ todo.createdAt.toString() }}</div> -->
            </div>

            <div class="space-x-2">

              <button class="px-2 text-red-600"
                      @click="removeTodo(index)"
                      title="Remove todo">&times;</button>
              <button v-if="!todo.done"
                      class="px-2 text-green-600"
                      @click="markAsDone(index)"
                      title="Mark as done">&check;</button>
              <button v-else
                      class="px-2 text-orange-600"
                      @click="markAsUndone(index)"
                      title="Mark as undone">&#8630;</button>
            </div>
            
          </div>
          <div v-if="todos.length === 0"
               class="px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm">
            You dont have anything in Todo List.
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";


export default defineComponent({
  setup() {
    const todos = reactive([]);
    const todoText = ref(""); // const todoText = {value: ""}


    function addTodo() {
      todos.unshift({
        text: todoText.value,
        createdAt: new Date(),
        done: false,
      });
      todoText.value = "";
    }


    function markAsDone(index) {
      todos[index].done = true;
    }


    function markAsUndone(index) {
      todos[index].done = false;
    }

    function removeTodo(index) {
      if (!confirm("Are you sure?")) {
        return;
      }
      todos.splice(index, 1);
    }

    return {
      todos,
      todoText,
      addTodo,
      markAsDone,
      markAsUndone,
      removeTodo,
    };
  },
});
</script>

<style scoped>

.done{
  text-decoration: line-through;
}
</style>