<template>
  <header class="header">
    <h1 ref="mycol">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      ref="userName"
      @keyup.enter="addItemName"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations: addMutationsItem } = createNamespacedHelpers('hobby')
export default {
  methods: {
    addItemName () {
      const value = this.$refs.userName.value
      // this.addItemFn(value)
      console.log(value)
      this.$store.dispatch('hobby/addItemFn', value)
      // this.$refs.userName.value = ''
    },
    open () {
      this.$refs.mycol.style.color = 'aqua'
    },
    ...addMutationsItem(['addItemFn'])
  }
}
</script>
