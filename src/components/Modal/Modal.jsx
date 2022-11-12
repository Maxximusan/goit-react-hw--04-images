import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

import css from 'components/Modal/Modal.module.css'



const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
    componentDidMount() {
        console.log('MOUNT');
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('WILL');
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClickModal();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClickModal()
        }
    }
    render() {
        const { src, alt } = this.props;
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={src} alt={alt} />
                </div>
            </div>,
            modalRoot,
        );
}
}

Modal.propTypes = {
  onClickModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};