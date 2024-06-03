import React from 'react'
import './WidgetColumn.scss'
import { Link } from 'react-router-dom'
import ImgAndLabelTime from '../../ImgAndLabelTime/ImgAndLabelTime.jsx'
import IconArrownRight from '@assets/image/IconArrowRight.svg'

const WidgetCoumn = ({ title, nameSeeAll, linkSeeAll, listWidget }) => {
  return (
    <div className="widgetColumn">
      <div className="widgetColumn-title">
        <div className="widgetColumn-title-name">{title}</div>
        <div className="widgetColumn-title-seeMore">
          <Link className="widgetColumn-title-seeMore-link" to={linkSeeAll}>
            {nameSeeAll}
          </Link>
          <img className="widgetColumn-title-seeMore-icon" src={IconArrownRight} alt="IconArrownRight" />
        </div>
      </div>
      <div className="widgetColumn-content">
        <div className="widgetColumn-content-listItem">
          {listWidget.map((item, index) => (
            <div className="widgetColumn-content-listItem-item" key={index}>
              <ImgAndLabelTime img={item.img} name={item.name} label={item.title} time={item.time} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WidgetCoumn
