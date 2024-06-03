import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './IconWithLabel.scss'

const IconWithLabel = ({ icon, label, to }) => {
  return (
    <NavLink activeClassName="current" exact className="iconWithLabel" to={to}>
      <img className="iconWithLabel-icon" src={icon} alt="iconWithLabel-icon" />
      <div className="iconWithLabel-label">{label}</div>
    </NavLink>
  )
}

IconWithLabel.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
}

export default IconWithLabel
