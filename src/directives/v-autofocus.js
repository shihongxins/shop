/**
 * 自定义 vue 指令
 * 可使用在 input 元素和自定义组件上
 * 如
 *  <input v-autofocus>
 * 或
 *  <my-input v-autofocus="#user" />
 *    ------MyInput.vue-----
 *    <template>
 *      <div>
 *        <input id="user" >
 *      </div>
 *    </template>
 */
export const autofocus = {
  mounted (el, binding) {
    const selector = binding.value ? `input${binding.value}` : 'input'
    el.parentNode.querySelector(selector).focus()
  }
}
