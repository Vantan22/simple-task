import React from 'react'
import { Link } from 'react-router-dom'

import './Widget.scss'
import IconArrownRight from '@assets/image/IconArrowRight.svg'
import CountersWave from './CountersWave/CountersWave.jsx'
import WidgetTask from './WidgetTask/WidgetTask.jsx'

const Widget = ({ title, nameSeeAll, linkSeeAll, listWidget, typeWidget }) => {
  return (
    <div className="widget">
      <div className="widget-navigation">
        <div className="widget-navigation-title">{title}</div>
        <div className="widget-navigation-seeMore">
          <Link className="widget-navigation-seeMore-link" to={linkSeeAll}>
            {nameSeeAll}
          </Link>
          <img className="widget-navigation-seeMore-icon" src={IconArrownRight} alt="IconArrownRight" />
        </div>
      </div>
      <div className="widget-content">
        {listWidget.map((item, index) => (
          <div className="widget-content-item" key={index}>
          {typeWidget === 'counterWave' ? 
          <CountersWave number={item.number} title={item.title} img={item.img} /> : 
          <WidgetTask title={item.title} typeTask={item.typeTask} date={item.date} label={item.label} content={item.content} listUser={item.listUser} />}

          </div>
        ))}
      </div>
    </div>
  )
}

export default Widget
