import React from 'react'

const Button=(props)=> {
    const {style, title } = props
  return (
    <div className={style}>{title}</div>
  )
}

export default Button