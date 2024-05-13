import React from 'react'
import './Dashboard.scss'
import Home from '../../layout/Home'
import Widget from '../../components/Widget/Widget'
import CountersWave from '../../components/CountersWave/CountersWave'

import { listWidget } from '../../contains/list-widget.js'
import { listActivity } from '../../contains/list-activity.js'
import WidgetCoumn from '../../components/WidgetColumn/WidgetCoumn.jsx'
const Dashboard = () => {
  return (
    <Home>
      <div className="contentDashboard">
        <div className="contentDashboard-left">
          <Widget
            title="Tasks overview"
            nameSeeAll="See all tasks"
            linkSeeAll="/"
            listWidget={listWidget}
          />
        </div>

        <div className="contentDashboard-right">
          <WidgetCoumn 
          title="Latest activity" 
          nameSeeAll="See all updates" 
          linkSeeAll="/" 
          listWidget={listActivity}/>
        </div>
      </div>



    </Home>
  )
}

export default Dashboard
