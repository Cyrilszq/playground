export function hashCode(str) {
  let hash = 0
  if (str.length === 0) {
    return hash.toString()
  }
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash = hash & hash
    hash = hash >>> 1
  }
  return hash.toString()
}

// 动态加载 js
export function loadJsStatic(src) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  // hash 作为 id 当作防重检查条件
  script.id = hashCode(src)
  document.head.appendChild(script)
}
// 动态加载 css
export function loadCssStatic(src) {
  const script = document.createElement('link')
  script.rel = 'stylesheet'
  script.href = src
  script.id = hashCode(src)
  document.head.appendChild(script)
}
