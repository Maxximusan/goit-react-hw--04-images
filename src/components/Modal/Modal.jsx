import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

import css from 'components/Modal/Modal.module.css'



const modalRoot = document.querySelector('#modal-root')

export const Modal = (props) => {
    const { src, alt, onClickModal } = props;
    
    

   

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClickModal()
        }
    }
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onClickModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        };
    }, [onClickModal])
      
                 

        return createPortal(
            <div className={css.Overlay} onClick={handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={src} alt={alt} />
                </div>
            </div>,
            modalRoot,
        );

}

Modal.propTypes = {
  onClickModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};