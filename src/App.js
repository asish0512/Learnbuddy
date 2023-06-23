import './App.css';
import Appl from './components/app/Appl';
import { Route, Routes } from "react-router-dom";
import Coursecont from './components/coursecontents/Coursecont';
import Lessoncont from './components/lessoncontents/Lessoncont';

function App() {
  return (
    <Routes>
      <Route path="/courses" element={<Appl/>} />
      <Route path="/courses/:courseId" element={<Coursecont/>}/>
      <Route path="/lessons/:lessonId" element={<Lessoncont/>}/>
    </Routes>
  );
}

export default App;
