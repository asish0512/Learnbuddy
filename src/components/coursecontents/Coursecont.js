import React, { useEffect, useRef, useState } from 'react'
import {useParams} from 'react-router-dom';
import Lesson from './Lesson';
import { course_content } from '../../data/courses';
import "./Coursecont.css"

const Coursecont = () => {
    const [data, setData] = useState({});
    const params = useParams();
    const fetchObj = useRef({});

    useEffect(() => {
        fetchObj.current = course_content[params?.courseId - 1];
        setData(fetchObj.current);
    },[]);


    return (
    <div className="course-content">
      <div className="course-name">
        <h2>{data?.name}</h2>
      </div>
      <div className="course-description">
        <span>{data?.description}</span>
      </div>
      <div className="course-lessons">
        {
           data?.lessons &&  data?.lessons.map((lesson) => {
                return (
                    <Lesson
                        key={lesson.id}
                        id = {lesson.id}
                        name = {lesson.name}
                        progress={lesson.progress}
                        watchCount={lesson.watchCount}
                    />
                )
            })
        }
      </div>
    </div>
  )
}

export default Coursecont
