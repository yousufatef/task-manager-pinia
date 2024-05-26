import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    totalCount() {
      return this.tasks.length;
    },
    favCount() {
      return this.tasks.filter((task) => task.isFav).length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleFav(id) {
      const tasks = this.tasks.find((task) => task.id === id);
      tasks.isFav = !tasks.isFav;
    },
  },
});
