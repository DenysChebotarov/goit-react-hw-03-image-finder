import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({hits}) {
  return (
    <ul class="gallery">
    {hits.map(item=>(<ImageGalleryItem key={item.id} webformatURL = {item.webformatURL} largeImageURL = {item.largeImageURL}/>))}
    </ul>
  );
}
