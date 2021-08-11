import React from 'react'
import PropTypes from 'prop-types'

function Buttons(props) {
    return (
        <button className={className}>
            {children}
        </button>
    )
}

Buttons.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired
}

export default Buttons

