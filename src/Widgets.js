import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Papa React is back', 'Top news - 9099 readers')}
            {newsArticle('Coronavirus: US updates', 'Top news - 866 readers')}
            {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
            {newsArticle('Bitcoin', 'Finance - 255 readers')}
            {newsArticle('Is Redux Too Good?', 'Code - 123 readers')}
            {newsArticle('A Linkedin Clone by Marcus!', 'Code - 99 readers')}
        </div>
    );
}

export default Widgets;
