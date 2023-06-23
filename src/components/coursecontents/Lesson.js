import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Lesson.css"
import {CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

const Lesson = ({id, name, progress, watchCount}) => {
    return (
    <div className='lesson-element'>
      <h3 className='lesson-name'>{name}</h3>
      <div className='lesson-progress-element'>
        <CircularProgressbar 
          value={progress} 
          text={`${progress}%`} 
          strokeWidth={8} 
          styles={buildStyles({
            rotation: 1,
            textSize: '20px',
            pathColor: `rgba(50, 31, 215)`,
            textColor: '#321fdb',
          })}
        />;
      </div>
      <Link to={"/lessons/" + id}>
     {<CButton style={{background:"#321fdb"}} className='lesson-button'>Play</CButton> }
      </Link>
    </div>
  )
}

export default Lesson
