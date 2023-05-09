
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

export default function ImageGallery({hits, clickImage}) {
  return (
    <ul className={css.imageGallery}>
    {hits.map(item=>(<ImageGalleryItem clickImage = {clickImage} key={item.id} webformatURL = {item.webformatURL} largeImageURL = {item.largeImageURL}/>))}
    </ul>
  );
}
