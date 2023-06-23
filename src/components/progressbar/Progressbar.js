import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

const Progressbar = ({progress}) => {
  return (
    <div style={{padding:"20px", width:"90%"}}>
        <CProgress className="mb-3">
            <CProgressBar value={`${progress}`}/>
        </CProgress>
    </div>
  )
}

export default Progressbar
