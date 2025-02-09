import React, { memo } from 'react'
import './index.css'

const Demo1 = memo(() => {
  return (
    <div className="outer">
      <div className="inner">11</div>
    </div>
  )
})

export default Demo1
