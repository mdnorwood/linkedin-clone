import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
   );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://media-exp1.licdn.com/dms/image/C4E16AQGJavW2Qex8jg/profile-displaybackgroundimage-shrink_350_1400/0/1609864958068?e=1620259200&v=beta&t=WMXrZS8rmVPF5nfJCtdUr-GDTnLQDKUvd7TeI6aP-u0' alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>
        </div>
    )
}

export default Sidebar;
