import React, { memo, useEffect } from 'react'

const generFn = (msg, needE = false) => {
  return (e) => {
    console.log(msg)
    needE && console.log(e.composedPath())
  }
}

const Demo1 = memo(() => {
  useEffect(() => {
    const documentCaptureFn = generFn('document 捕获')
    const documentFn = generFn('document 冒泡')
    const bodyCaptureFn = generFn('body 捕获')
    const bodyFn = generFn('body 冒泡')
    const rootCaptureFn = generFn('root 捕获', true)
    const rootFn = generFn('root 冒泡')
    const rootEl = document.getElementById('root')

    document.addEventListener('click', documentCaptureFn, true)
    document.addEventListener('click', documentFn, false)

    document.body.addEventListener('click', bodyCaptureFn, true)
    document.body.addEventListener('click', bodyFn, false)

    rootEl?.addEventListener('click', rootCaptureFn, true)
    rootEl?.addEventListener('click', rootFn, false)
  }, [])

  return (
    <div
      className="outer"
      onClick={(e) => {
        console.log('outer 冒泡')
      }}
      onClickCapture={() => {
        console.log('outer 捕获')
      }}
    >
      <div
        className="inner"
        onClick={() => {
          console.log('inner 冒泡')
        }}
        onClickCapture={() => {
          console.log('inner 捕获')
        }}
      ></div>
    </div>
  )
})

export default Demo1
