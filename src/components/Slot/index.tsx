import React from 'react'

const Slot = (props: any) => {
  // children可能是一个数组或者一个对象或者undefined，Recat的Children.toArray方法可以将其转换为数组 就不用我们写判断转为数组了
  const children: Record<string, any>[] = React.Children.toArray(props.children)
  const headerSlot: Record<string, any>[] = []
  const footerSlot: Record<string, any>[] = []
  const defaultSLot: Record<string, any>[] = []

  console.log(children)

  children.forEach((child) => {
    const slot = child.props.slot
    if (slot === 'header') {
      headerSlot.push(child)
    } else if (slot === 'footer') {
      footerSlot.push(child)
    } else {
      defaultSLot.push(child)
    }
  })
  return (
    <div>
      {headerSlot}
      <div>分割线</div>
      {defaultSLot}
      <div>分割线</div>
      {footerSlot}
    </div>
  )
}
export default Slot
