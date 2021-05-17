<template>
  <SearchInput
    @onStatusChange="handleStatusChange" />
  <component
    v-if="component"
    :is="component"></component>
</template>

<script>
import { defineAsyncComponent, provide, ref } from 'vue'
import SearchInput from './components/SearchInput'

// 搜索框状态的改变实现不同的组件切换
const useSearchInputStatusEffect = () => {
  const component = ref('')
  const handleStatusChange = (st) => {
    // console.log('=============StatusChange===========', component.value)
    if (st === 'focus') {
      component.value = 'SearchAdvice'
    } else if (st === 'change') {
      component.value = 'SearchResult'
    } else if (st === 'none') {
      component.value = ''
    }
  }
  return { component, handleStatusChange }
}

export default {
  name: 'Search',
  props: {
    placeholder: {
      default: ''
    },
    searchText: {
      default: () => {
        return ref('')
      }
    }
  },
  components: {
    SearchInput,
    SearchAdvice: defineAsyncComponent(() => import('./components/SearchAdvice')),
    SearchResult: defineAsyncComponent(() => import('./components/SearchResult'))
  },
  setup (props) {
    // 为子组件 搜索输入框，搜索建议，搜索结果 等组件注入必要 props
    provide('searchText', props.searchText)
    provide('placeholder', props.placeholder)
    // 调用搜索状态改变处理逻辑
    const { component, handleStatusChange } = useSearchInputStatusEffect()
    provide('handleStatusChange', handleStatusChange)
    return { component, handleStatusChange }
  }
}
</script>
