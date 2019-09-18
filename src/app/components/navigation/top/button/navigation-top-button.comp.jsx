import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import style from './navigation-top-button.style'

const navTopButton = ({ title, type = '', handleMouseOver }) => {

    let icon,
        divStyles = style.navTopButton,
        iconStyles = ''

    switch (type) {
        case 'search':
            icon = faSearch
            divStyles = style.search
            break;
        case 'cta-sign-up':
            icon = faUserPlus
            divStyles = style.signUp
            iconStyles = { color: 'white', paddingRight: '5px' }
            break;
        default:
            break;
    }
    return (
        <div onMouseOver={handleMouseOver} className={divStyles}>
            {type === '' ? null : <FontAwesomeIcon style={iconStyles} icon={icon} />}
            {title === '' ? null : title}
        </div>
    )
}

export default navTopButton