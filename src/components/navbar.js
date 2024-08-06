import React from 'react'

import { HashLink as Link } from 'react-router-hash-link';


import PropTypes from 'prop-types'

import './navbar.css'
import logo from '../images/logo.jpeg'


const Navbar = (props) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div className='logo'>
        <img src={logo} height='70px'
          
          />
          <h1>TMP</h1>
        </div>
        
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <Link to='#home'>
            <span className="thq-link thq-body-small">{props.link1}</span>
            </Link>
            <Link to='#service'>
            <span className="thq-link thq-body-small">{props.link2}</span>
            </Link>

            <Link to='#about'>
            <span className="thq-link thq-body-small">{props.link3}</span>
            </Link>

            <Link to='#project'>
            <span className="thq-link thq-body-small">{props.link4}</span>
            </Link>

            <Link to='#contact'>
            <span className="thq-link thq-body-small">{props.link5}</span>
            </Link>
          </nav>
          <div className="navbar-buttons">
            {/* <button className="navbar-action1 thq-button-animated thq-button-filled">
              <span className="thq-body-small">Action 1</span>
            </button>
            <button className="navbar-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Action 2</span>
            </button> */}
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={logo}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <Link to='#home'>
              <span className="thq-link thq-body-small">{props.link1}</span>
              </Link>
              <Link to='#service'>
              <span className="thq-link thq-body-small">{props.link2}</span>
              </Link>

              <Link to='#about'>
              <span className="thq-link thq-body-small">{props.link3}</span>
              </Link>

              <Link to='#project'>
              <span className="thq-link thq-body-small">{props.link4}</span>
              </Link>

              <Link to='#contact'>
              <span className="thq-link thq-body-small">{props.link5}</span>
              </Link>
            </nav>
          </div>
          {/* <div className="navbar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div> */}
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link1: 'Home',
  link5: 'Contact',
  link2: 'Services',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: 'View Our Services',
  logoAlt: 'Earth Movers Company Logo',
  link3: 'About',
  action1: 'Get a Quote',
  link4: 'Projects',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar
