
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

export default function ImageGallery({hits}) {
  return (
    <ul className={css.imageGallery}>
    {hits.map(item=>(<ImageGalleryItem key={item.id} webformatURL = {item.webformatURL} largeImageURL = {item.largeImageURL}/>))}
    </ul>
  );
}
