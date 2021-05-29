import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
    return (
        <input className={props.className} name={props.name} type={props.type} placeholder={props.placeholder} />
    )
}

Input.propTypes = {

}

export default Input

