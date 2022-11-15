import PropTypes from "prop-types";
import { useState } from 'react'
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'
import { Modal } from 'components/Modal/Modal'



export const ImageGalleryItem = (props) => {

    const {id, webformatURL, largeImageURL, alt} = props

    const [showModal, setShowModal] = useState(false)
   

    const toggleModal = () => setShowModal(prevState => !prevState)
    
    

    return (
        <li key={id} className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItem__image}
                src={webformatURL}
                alt={alt}
                onClick={toggleModal}
                 />
            {showModal && <Modal onClickModal={toggleModal} src={ largeImageURL } alt={alt} />}
</li>
    )

}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    alt: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,

}