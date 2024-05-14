import PropTypes from 'prop-types'
import './LabelWithIcon.scss'

const LabelWithIcon = ({ icon, label }) => {
  return (
    <div className="labelWithIcon">
      <div className="labelWithIcon-label">{label}</div>
      <img className="labelWithIcon-icon" src={icon} alt="labelWithIcon-icon" />
    </div>
  )
}

LabelWithIcon.propTypes = {
  label: PropTypes.string,
}

export default LabelWithIcon
