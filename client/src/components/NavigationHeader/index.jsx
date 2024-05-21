import React from 'react'
import './NavigationHeader.scss'

import IconPull from '@assets/image/IconPull.svg'
import IconSearch from '@assets/image/IconSearch.svg'
import IconNoti from '@assets/image/IconNoti.svg'
import IconAdd from '@assets/image/IconAdd.svg'
import IconApp from '@assets/image/IconApp.svg'
import ImgUser from '@assets/image/ImgUser/User1.jpg'

const NavigationHeader = () => {
  const titleHeaderHandle = () => {
    let title = 'Projects'
    switch (window.location.href.split('/').pop()) {
      case 'projects':
        title = 'All Projects'
        break
      case 'dashboard':
        title = 'Dashboard'
        break
      default:
    }
    return title
  }

  return (
    <div className="navigationHeader">
      <div className="navigationHeader-left">
        <img className="navigationHeader-left-icon" src={IconPull} alt="iconPull" />
        <div className="navigationHeader-left-name">{titleHeaderHandle()}</div>
      </div>
      <div className="navigationHeader-right">
        <div className="navigationHeader-right-search">
          <img className="navigationHeader-right-search-icon" src={IconSearch} alt="iconSearch" />
          <input type="text" placeholder="Search for task and etc." className="navigationHeader-right-search-input" />
        </div>
        <div className="navigationHeader-right-navigation">
          <img className="navigationHeader-right-navigation-icon" src={IconNoti} alt="iconPull" />
          <img className="navigationHeader-right-navigation-icon" src={IconAdd} alt="iconPull" />
          <img className="navigationHeader-right-navigation-icon" src={IconApp} alt="iconPull" />
        </div>
        <div className="navigationHeader-right-imgUser">
          <img className="navigationHeader-right-imgUser-img" src={ImgUser} alt="ImgUser" />
        </div>
      </div>
    </div>
  )
}

export default NavigationHeader
