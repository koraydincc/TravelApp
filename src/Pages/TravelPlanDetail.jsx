import React from 'react'
import { useParams } from 'react-router-dom'

function TravelPlanDetail() {
  const params = useParams()
  return (
    <div>{params.travelName}</div>
  )
}

export default TravelPlanDetail