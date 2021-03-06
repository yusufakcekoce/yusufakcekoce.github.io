import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Footer = () => {

    return (
        <footer>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label style={{ float: 'left' }}>
                        <input
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />{' '}
                        Dark mode
                    </label>
                )}
            </ThemeToggler>
            <div className="social-links" style={{ float: 'right' }}>
                <a href="https://github.com/kayraberktuncer">Github</a>
                {` `}
                <a href="https://twitter.com/home">Twitter</a>
                {` `}
                <a href="https://www.linkedin.com/in/kayraberktuncer/">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer