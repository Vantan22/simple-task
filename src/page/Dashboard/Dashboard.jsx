import React from 'react'
import './Dashboard.scss'
import Home from '../../layout/Home'
import Widget from '../../components/Widget/Widget'
import CountersWave from '../../components/CountersWave/CountersWave'

import {listWidget} from '../../contains/list-widget.js'
const Dashboard = () => {
  return (
    <Home>
        <Widget
         title="Tasks overview" 
         nameSeeAll="See all tasks" 
         linkSeeAll="/" 
         listWidget={listWidget}
         />
    </Home>
  )
}

export default Dashboard
