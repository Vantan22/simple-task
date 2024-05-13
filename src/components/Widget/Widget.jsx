import React from 'react'
import { Link } from 'react-router-dom'

import './Widget.scss'
import IconArrownRight from '../../assets/image/IconArrowRight.svg'
import CountersWave from '../CountersWave/CountersWave'
const Widget = ({ title, nameSeeAll, linkSeeAll, listWidget }) => {
    return (
        <div className='widget'>
            <div className="widget-navigation">
                <div className="widget-navigation-title">
                    {title}
                </div>
                <div className="widget-navigation-seeMore">
                    <Link className="widget-navigation-seeMore-link" to={linkSeeAll}>
                        {nameSeeAll}
                    </Link>
                    <img className='widget-navigation-seeMore-icon' src={IconArrownRight} alt='IconArrownRight' />
                </div>
            </div>
            <div className="widget-content" >
                {listWidget.map((item, index) => (
                    <div className="widget-content-item" key={index}>
                        <CountersWave number={item.number} title={item.title} img={item.img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Widget