import React from 'react'
import './ImgAndLabelTime.scss'

const ImgAndLabelTime = ({ img, name, label, time }) => {
    return (
        <div className='imgAndLabelTime'>
            <img className='imgAndLabelTime-img' src={img} alt="ImgUser" />
            <div className="imgAndLabelTime-title">
                <div className="imgAndLabelTime-title-header">
                    <div className="imgAndLabelTime-title-header-name">{name}</div>
                    <div className="imgAndLabelTime-title-header-label">{label}</div>
                </div>
                <div className="imgAndLabelTime-title-time">{time}</div>
            </div>
        </div>
    )
}

export default ImgAndLabelTime