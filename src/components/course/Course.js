import React from 'react'
import Card from '../card/Card'
import Progressbar from '../progressbar/Progressbar'
import "./Course.css"

const Course = ({id, name, progress}) => {
  return (
    <div className='course-element'>
      <Card
        id = {id}
        name = {name}
      />
      <Progressbar
        progress= {progress}
      />
    </div>
  )
}

export default Course
