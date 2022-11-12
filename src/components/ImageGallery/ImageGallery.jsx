import PropTypes from "prop-types";
import css from 'components/ImageGallery/ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'


export const ImageGallery = (props) => {
const { images } = props

    return (
        <ul className={css.ImageGallery}>
            {images.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        webformatURL={image.webformatURL}
                        largeImageURL={image.largeImageURL}
                        alt={image.tags}
                    />
                )
            })}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
    
}