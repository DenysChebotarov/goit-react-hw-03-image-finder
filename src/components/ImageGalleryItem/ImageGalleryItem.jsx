import css from './ImageGalleryItem.module.css'
export default function ImageGalleryItem({webformatURL, largeImageURL, clickImage}) {
  return (
    <li onClick={()=>clickImage(largeImageURL)} className={css.imageGalleryItem}>
  <img className={css.imageGalleryItem_image} src={webformatURL} alt="" />
</li>
  )
}
