
import IconWithLabel from '../IconWithLabel/IconWithLabel';
import LabelWithIcon from '../LabelWithIcon/LabelWithIcon';
import './ListNavigation.scss';

const ListNavigation = ({ nameList, icon, list}) => {
  const handleClick = () => {
    onClick();
};
  return (
    <div className="ListNavigation">
      <LabelWithIcon icon={icon} label={nameList}/>
      {list.map((item,index)=>{
        return <IconWithLabel key={index} icon={item.icon} label={item.label} to={item.to} />
      })}
    </div>
  )
}

export default ListNavigation