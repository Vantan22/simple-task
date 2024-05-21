import React from 'react'

import './SortingDropDown.scss'
import { Select } from 'antd';
const SortingDropDown = ({ title, handleChange, defaultValue, options }) => {
    return (
        <div className="sortingDropDown">
            <div className='sortingDropDown-title'>
                {title}
            </div>
            <Select 
                className='sortingDropDown-select'
                defaultValue={defaultValue}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}

export default SortingDropDown