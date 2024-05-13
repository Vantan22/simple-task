import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './IconWithLabel.scss';
const IconWithLabel = ({ icon, label, to }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <Link className={'iconWithLabel'} to={to} onClick={handleClick}>
            <img className='iconWithLabel-icon' src={icon} alt='iconWithLabel-icon' />
            <div className="iconWithLabel-label">{label}</div>
        </Link>
    );
};

IconWithLabel.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
};

export default IconWithLabel;
