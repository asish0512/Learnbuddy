import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { lesson_content } from '../../data/courses';
import "./Lessoncont.css"
import Quiz from '../quiz/Quiz'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

const Lessoncont = () => {
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [passed, setPassed] = useState(false);
	const [showScore, setShowScore] = useState(false);
  const [data, setData] = useState({});
  const params = useParams();
  const fetchObj = useRef({});
	const navigate = useNavigate();
 
  useEffect(() => {
      fetchObj.current = lesson_content[params?.lessonId-1];
      setData(fetchObj.current);
  },[]);
  
	useEffect(() => {
    if (passed) {
          setTimeout(() =>{
            navigate("/lessons/" + data?.next_id);
             window.location.reload(false);
          },1000);
    }
	},[passed])

  return (
    <div>
    <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url = {data?.video_url}
            width='640px'
            height='360px'
            onProgress={(progress) => {
              setPlayed(progress.playedSeconds);
            }}
            onDuration={(dur) => {setDuration(dur)}}
            onEnded={() => {setShowQuiz(!showQuiz)}}
        />
    </div>
    {
      showQuiz && 
      <Quiz
        questions={data?.quiz}
        showScore={showScore}
        setShowScore={setShowScore}
        setPassed ={setPassed}
      />
    }
    </div>
  )
}

export default Lessoncont
