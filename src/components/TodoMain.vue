<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in todo"
      :key="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="btnItem(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: hobbyList } = createNamespacedHelpers('hobby')
const { mapMutations: delMutationsItem } = createNamespacedHelpers('hobby')
export default {
  data () {
    return {}
  },
  computed: {
    ...hobbyList(['todo'])
  },

  methods: {
    btnItem (index) {
      this.delItemFn(index)
      // this.$store.dispatch('delItemFn', index)
    },
    ...hobbyList([]),
    ...delMutationsItem(['delItemFn'])
  }
}
</script>
