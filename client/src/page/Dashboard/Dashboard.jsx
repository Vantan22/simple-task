import React from 'react'
import './Dashboard.scss'
import Home from '@layout/Home/index.jsx'
import Widget from '@components/Widget/Widget.jsx'

import { listWidget, listTaskAndEvent } from '@contains/list-widget.js'
import { listActivity } from '@contains/list-activity.js'
import WidgetCoumn from '@components/Widget/WidgetColumn/WidgetCoumn.jsx'

const Dashboard = () => {
  return (
    <Home>
      <div className="contentDashboard">
        <div className="contentDashboard-left">
          <Widget title="Tasks overview" nameSeeAll="See all tasks" linkSeeAll="/" listWidget={listWidget} typeWidget="counterWave" />
          <Widget title="Tasks and events" nameSeeAll="See all events" linkSeeAll="/" listWidget={listTaskAndEvent} typeWidget="taskAndEvent" />
        </div>

        <div className="contentDashboard-right">
          <WidgetCoumn title="Latest activity" nameSeeAll="See all updates" linkSeeAll="/" listWidget={listActivity} />
        </div>
      </div>
    </Home>
  )
}

export default Dashboard
