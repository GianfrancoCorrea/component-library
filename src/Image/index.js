import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'src/Modal';
import Icon from 'src/Icon';

function Image(props) {
    const {
        images, mainImage, className, showGallery,
        galleryModalTitle, mainImageTitle, onClick,
    } = props;

    const primaryImage = (
        <img
            src={mainImage || images[0].url}
            alt={mainImageTitle}
            className={`image ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        />
    );

    const modalTrigger = (
        <div className="image-as-gallery-trigger-wrapper">
            {primaryImage}
            <div className="gallery-images-count">
                <Icon name="image" />
                <span>{`${images.length}`}</span>
            </div>
        </div>
    );

    return (
        <div className={className}>
            {
                showGallery
                    ? (
                        <Modal
                            trigger={modalTrigger}
                            title={galleryModalTitle}
                            content="Photo gallery"
                            className="photo-gallery-modal"
                        />
                    )
                    : primaryImage
            }
        </div>
    );
}

Image.defaultProps = {
    images            : [{ url: '/static/noimage.jpg' }],
    mainImage         : '',
    showGallery       : false,
    className         : '',
    galleryModalTitle : '',
    onClick           : null,
    mainImageTitle    : '',
};

Image.propTypes = {
    /**
    Images array, giving title and url
    */
    images: PropTypes.arrayOf(PropTypes.shape({
        title : PropTypes.string,
        url   : PropTypes.string,
    })),
    /**
    Main image url. Gallery trigger.
    */
    mainImage         : PropTypes.string,
    /**
    Open images gallery on mainImage click
    */
    showGallery       : PropTypes.bool,
    /**
    Custom className
    */
    className         : PropTypes.string,
    /**
    Images gallery Modal title
    */
    galleryModalTitle : PropTypes.string,
    /**
    Function triggered on mainImage click
    */
    onClick           : PropTypes.func,
    /**
    mainImage alt text
    */
    mainImageTitle    : PropTypes.string,
};

export default Image;
