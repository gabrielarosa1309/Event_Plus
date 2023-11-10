import React from 'react';
import 'ImageIllustrator.css';

const ImageIllustrator = ({altText, imgName, additionalClass}) => {
    return (
        <figure className="illustrator-box">
            <img 
                src={imgResource}
                alt={altText}
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
    );
};

export default ImageIllustrator;