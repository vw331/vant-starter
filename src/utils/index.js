/**
 * 暂停函数
 * @param {number} ms
 */
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve,ms));
}

/**
 * 防抖函数
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate
 */
export const debounce = (func, wait, immediate) => {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }, wait)
    if (immediate && !timeout) func.apply(this, [...args])
  }
}
