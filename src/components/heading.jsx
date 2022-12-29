import React from 'react'

function Heading({title, ...props}) {
  return (
    <div style={{fontWeight:"bold", fontSize:"larger"}}>{title}</div>
  )
}

export default Heading