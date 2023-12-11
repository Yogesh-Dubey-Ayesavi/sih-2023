import React from 'react'

const page = ({ params }) => {
  return (
    <div>{params.dir} + {params.initiative}</div>
  )
}

export default page