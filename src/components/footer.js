import React from 'react'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {

    return (
        <footer>
            <div className="copyright">
                © {new Date().getFullYear()}, Created by
                {` `}
                Kayra
            </div>
            <div className="icons">
                <a href="https://github.com/kayraberktuncer" target="blank"><FiGithub>GitHub</FiGithub></a>
                {` `}
                <a href="https://twitter.com/home" target="blank"><FiTwitter>Twitter</FiTwitter></a>
                {` `}
                <a href="https://www.linkedin.com/in/kayraberktuncer/" target="blank"><FiLinkedin>LinkedIn</FiLinkedin></a>
            </div>
        </footer>
    )
}

export default Footer