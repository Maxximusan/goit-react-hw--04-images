import PropTypes from "prop-types";
import React, { Component } from 'react'
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'
import { Modal } from 'components/Modal/Modal'



export class ImageGalleryItem extends Component {

    state = {
        showModal: false,
    }

    toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
     
    }))
    }
    
    render() {
const {id, webformatURL, largeImageURL, alt} = this.props

    return (
        <li key={id} className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItem__image}
                src={webformatURL}
                alt={alt}
                onClick={this.toggleModal}
                 />
            {this.state.showModal && <Modal onClickModal={this.toggleModal} src={ largeImageURL } alt={alt} />}
</li>
    )
}
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    alt: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,

}