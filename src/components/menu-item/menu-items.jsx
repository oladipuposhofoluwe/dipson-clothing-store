import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.styles.scss'

const MenuItem = ({title, imageURL, size, history, linkUrl, match }) => {
    
    return (
        <div style={{ backgroundImage: `url(${imageURL})` }} className={`${size} menu-item background-image`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}


export default withRouter (MenuItem);

