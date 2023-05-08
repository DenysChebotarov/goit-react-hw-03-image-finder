import css from './ImageGalleryItem.module.css'
export default function ImageGalleryItem({webformatURL, largeImageURL}) {
  return (
    <li className={css.imageGalleryItem}>
  <img className={css.imageGalleryItem_image} src={webformatURL} alt="" />
</li>
  )
}
