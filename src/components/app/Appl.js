import './Appl.css';
import Progressbar from '../progressbar/Progressbar';
import Course from '../course/Course';
import {courses} from '../../data/courses'

function Appl() {
  return (
    <div className="App">
      <h2 style={{marginLeft:"50px", padding:"10px"}}>
        My Learning
      </h2>
      <span style={{marginLeft:"50px", padding:"10px"} }>Your Progress</span>
      <div style={{marginLeft:"80px"}}>
        <Progressbar/>
      </div>
      
      <span style={{marginLeft:"50px",padding:"10px"}}>Your Enrollment</span>
      <div>
      {
        courses.map((course) => {
          return (
          <Course
            key={course.id}
            id={course.id}
            name = {course.name}
            description={course.description}
            progress={course.progress}
          />
          )
        })
      }
      </div>
    </div>
 

  );
}

export default Appl;
