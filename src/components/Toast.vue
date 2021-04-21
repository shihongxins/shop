<template>
  <div v-if="data.content.length" class="toast">
    {{data.content}}
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

// toast data
const data = reactive({
  content: '',
  time: 3000
})

// show toast function
const showToast = (c, t) => {
  if (c.length) {
    if (t > 500) {
      data.time = t
    }
    data.content = c
  }
}

// Toast component by Vue Composition API
const Toast = {
  name: 'Toast',
  setup () {
    // auto hide toast
    const { content } = toRefs(data)
    watch(content, (value) => {
      if (value.length > 0) {
        setTimeout(() => {
          data.content = ''
          data.time = 3000
        }, data.time)
      }
    })
    return {
      data
    }
  }
}

export { Toast as default, showToast }
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .05rem;
  padding: .1rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
}
</style>
