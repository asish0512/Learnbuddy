import React from 'react'
import {CCard, CCardImage, CCardBody, CCardTitle, CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import "./Card.css"
import { Link } from 'react-router-dom';


const Card = (props) => {
  const {id, name} = props
  return (
    <div className='card-elements'>
      <CCard className="card-element">
        <CCardImage orientation="top"  />
        <CCardBody>
            <CCardTitle>{`${name}`}</CCardTitle>
            <Link to={"/courses/" + id}>
            <CButton className='card-button'>Enter</CButton>
            </Link>
        </CCardBody>
       </CCard>
    </div>
  )
}

export default Card
