import IconWithLabel from '../IconWithLabel/IconWithLabel.jsx'
import LabelWithIcon from '../LabelWithIcon/LabelWithIcon.jsx'
import './ListNavigation.scss'

const ListNavigation = ({ nameList, icon, list }) => {
  return (
    <div className="ListNavigation">
      <LabelWithIcon icon={icon} label={nameList} />
      {list.map((item, index) => {
        return <IconWithLabel key={index} icon={item.icon} label={item.label} to={item.to} />
      })}
    </div>
  )
}

export default ListNavigation
