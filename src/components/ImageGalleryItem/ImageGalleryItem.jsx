export default function ImageGalleryItem({webformatURL, largeImageURL}) {
  return (
    <li class="gallery-item">
  <img src={webformatURL} alt="" />
</li>
  )
}
