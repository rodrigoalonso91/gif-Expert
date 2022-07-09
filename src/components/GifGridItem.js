import PropTypes from 'prop-types'
import React from 'react'

export const GifGridItem = ({title, url}) => {

    return (
	    <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p data-testid="p1">{title}</p>
        </div>
    )
};

GifGridItem.propTypes = {
	title : PropTypes.string.isRequired,
	url : PropTypes.string.isRequired
}
