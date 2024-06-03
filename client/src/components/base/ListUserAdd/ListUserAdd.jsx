import React from 'react'
import './ListUserAdd.scss'
import IconAdd from '@assets/image/Dashboard/Widgets/DueTask/IconAdd.svg'
const ListUserAdd = ({listUsers}) => {
  return (
    <div className="listUserAdd">
    {listUsers && listUsers.map((item, index) => (
        <div className="listUserAdd-item" key={index}>
          <img className="listUserAdd-item-img" src={item.img} alt="img" />
        </div>
    ))}
        <img src={IconAdd} className="listUserAdd-icon"></img>
    </div>
  )
}

export default ListUserAdd
