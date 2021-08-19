<template>
  <div
    :class="{header:true,'open':isOpen}">
    <a v-if="isOpen"
      class="refresh">
      <i
        class="el-icon-refresh"></i>
    </a>
    <el-switch
      v-model="isOpen"
      active-color="#13ce66">
    </el-switch>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      switchValue: false
    }
  },
  methods: {
  }
}
</script>
