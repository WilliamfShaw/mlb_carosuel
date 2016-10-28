class CarouselThumbnailView {
  constructor(data, el) {
    this.el = el;
    this.headline = data.game_media.media[1].headline;
    this.small_thumbnail = data.video_thumbnails.thumbnail[0].content;
    this.large_thumbnail = data.video_thumbnails.thumbnail[1].content;
    this.venue = data.venue;
    this.render();
  }

  render() {
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'carousel__thumbnails__content';
    const headline = this.createTextNode(this.headline);
    thumbnailContainer.appendChild(headline);
    const img = this.createImageNode(this.small_thumbnail);
    thumbnailContainer.appendChild(img);
    const venue = this.createTextNode(this.venue);
    thumbnailContainer.appendChild(venue);
    this.addMouseEnterEvent(img);
    this.addMouseOutEvent(img);
    this.el.appendChild(thumbnailContainer);
  }

  createTextNode(text) {
    const div = document.createElement('div');
    div.className = 'carousel__thumbnails__content__metainfo';
    div.innerHTML = text;
    return div;
  }

  createImageNode(img_url) {
    const div = document.createElement('div');
    div.className = 'carousel__thumbnails__content__img';
    div.style.backgroundImage = `url(${img_url})`;
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundSize = 'cover';
    return div;
  }

  addMouseEnterEvent(node) {
    node.addEventListener('mouseover', (e) => {
      e.target.style.backgroundImage = `url(${this.large_thumbnail})`;
      e.target.style.transition = 'background-image 0.2s ease-in-out'
    })
  }

  addMouseOutEvent(node) {
     node.addEventListener('mouseleave', (e) => {
      e.target.style.backgroundImage = `url(${this.small_thumbnail})`;;
      e.target.style.transition = 'background-image 0.2s ease-in-out'
    })
  }
}
