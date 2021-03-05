import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Footer = () => {

    return (
        <footer>
            <a href="https://github.com/kayraberktuncer">Github</a>
            {` `}
            <a href="https://twitter.com/home">Twitter</a>
            {` `}
            <a href="https://www.linkedin.com/in/kayraberktuncer/">LinkedIn</a>

            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label style={{ float: 'right' }}>
                        <input
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />{' '}
                        Dark mode
                    </label>
                )}
            </ThemeToggler>
        </footer>
    )
}

export default Footer