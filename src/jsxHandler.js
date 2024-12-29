const each = function (obj, cb) {
  if (obj === null || typeof obj !== 'object')
    throw new TypeError(`${obj} is not a valid object`)

  if (typeof cb !== 'function')
    throw new TypeError(`${cb} is not a valid function`)

  let keys = Reflect.ownKeys(obj)

  keys.forEach((key, i) => {
    cb(obj[key], key, i)
  })
}

export function render(virtualDOM, container) {
  let { type, props } = virtualDOM

  if (typeof type === 'string') {
    let ele = document.createElement(type)

    each(props, (value, key) => {
      // console.log(value, key)

      if (key === 'className') {
        ele.classList.add(value)

        return
      }

      if (key === 'style') {
        each(value, (val, attr) => {
          ele.style[attr] = val
        })

        return
      }

      if (key === 'children') {
        let children = Array.isArray(value) ? value : [value]

        children.forEach((child) => {
          if (typeof child === 'string') {
            ele.appendChild(document.createTextNode(child))
          }

          render(child, ele)
        })

        return
      }

      ele.setAttribute(key, value)
    })

    container.appendChild(ele)
  }
}
