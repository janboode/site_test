import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import NavTopButton from './button/navigation-top-button.comp'
import style from './navigation-top.style'

const navTop = (props) => {

    const { navItems, handleMouseOver } = props

    const navLinks = navItems.map(({ title, path, type = '' }, i, a) => {
        return (
            <NavLink key={title + i} to={path}>
                <NavTopButton
                    handleMouseOver={handleMouseOver}
                    title={title}
                    type={type}
                />
            </NavLink>
        )
    })

    return (
        <nav className={style.navTop}>
            {navLinks}
        </nav>
    )
}

navTop.defaultProps = {
    navItems: [
        { title: 'Over Bryte', path: '/over-bryte' },
        { title: 'Cursussen', path: '/cursussen' },
        { title: 'Bryte Mod', path: '/bryte-mod' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' },
        { title: '', path: '/contact', type: 'search' },
        { title: 'Schrijf je in!', path: '/contact', type: 'cta-sign-up' },
    ]
}

export default navTop