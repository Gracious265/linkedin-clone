import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Logo from './assets/linkedin.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccount from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MessagingIcon from '@mui/icons-material/Message'


const Header = () => {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src={Logo} alt='' />
            <div className='header__search'>
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccount} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={MessagingIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://avatars.githubusercontent.com/u/73261241?v=4" title="Me" />
        </div>
    </div>
  )
}

export default Header;