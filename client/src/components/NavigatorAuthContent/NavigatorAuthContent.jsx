import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NavigatorAuthContent.scss'

const NavigatorAuthContent = ({ content, contentLink, to }) => {
  return (
    <div className="navigatorAuthContent">
      <div className="navigatorAuthContent-text">{content}</div>
      <Link className="navigatorAuthContent-link" to={to}>
        {contentLink}
      </Link>
    </div>
  )
}

NavigatorAuthContent.propTypes = {
  content: PropTypes.string,
  contentLink: PropTypes.string,
  to: PropTypes.string,
}

export default NavigatorAuthContent
