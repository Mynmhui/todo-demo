<template>
  <div>
    <button @click="getRefs">换肤</button>
    <div class="todoapp">
      <todo-header ref="colors"></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data () {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created () {},

  methods: {
    getRefs () {
      this.$refs.colors.open()
    }
  }
}
</script>

<style scoped></style>
