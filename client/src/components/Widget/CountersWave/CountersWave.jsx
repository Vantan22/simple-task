import React from 'react'
import './CountersWave.scss'

const CountersWave = ({ number, title, img }) => {
  return (
    <div className="countersWave">
      <div className="countersWave-label">
        <div className="countersWave-label-number">{number}</div>
        <div className="countersWave-label-text">{title}</div>
      </div>
      <img className="countersWave-img" src={img} alt="countersWaveImg" />
    </div>
  )
}

export default CountersWave
