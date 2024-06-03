import React from 'react'
import './WidgetTask.scss'
import {listUserAdd} from '@contains/list-activity.js'
import IconDate from '@assets/image/Dashboard/Widgets/DueTask/IconDate.svg'
import IconCircleLeft from '@assets/image/Dashboard/Widgets/DueTask/IconCircleLeft.svg'
import IconCircleRight from '@assets/image/Dashboard/Widgets/DueTask/IconCircleRight.svg'
import ListUserAdd from '../../base/ListUserAdd/ListUserAdd'
const WidgetTask = ({ title, typeTask, date, label, content, listUser }) => {
    return (
        <div className="widgetTask">
            <div className="widgetTask-title">{title}</div>
            <div className="widgetTask-calender">
                <div className='widgetTask-calender-left'>
                    <img className="widgetTask-calender-left-icon" src={IconDate} alt="IconDate" />
                    <div className="widgetTask-calender-left-text">{typeTask}</div>
                </div>
                <div className='widgetTask-calender-right'>{date}</div>
            </div>
            <div className='widgetTask-content'>
                <div className='widgetTask-content-label'>{label}</div>
                <div className='widgetTask-content-content'>{content}</div>

            </div>
            <div className='widgetTask-listUserAdd'>
                <ListUserAdd listUsers={listUserAdd} />
            </div>
            <div className='widgetTask-slider'>
                <div className='widgetTask-slider-label'>
                    2/9 task
                </div>
                <div className='widgetTask-slider-icon'>
                    <img src={IconCircleLeft} alt="IconDate" />
                    <img src={IconCircleRight} alt="IconDate" />
                </div>
            </div>
        </div>
    )
}

export default WidgetTask