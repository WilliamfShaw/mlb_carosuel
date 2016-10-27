class ThumbnailView {
  constructor(data, el) {
    this.data = data;
    this.el = el;
    this.render();
  }

  render() {
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'carousel__thumbnails__content'
    const headline = this.createTextNode(this.data.game_media.media[1].headline);
    thumbnailContainer.appendChild(headline);
    const img = this.createImageNode(this.data.video_thumbnails.thumbnail[0].content);
    thumbnailContainer.appendChild(img);
    const venue = this.createTextNode(this.data.venue);
    thumbnailContainer.appendChild(venue);
    this.el.appendChild(thumbnailContainer)
  }

  createTextNode(text) {
    const div = document.createElement('div');
    div.className = 'carousel__thumbnails__content__metainfo'
    div.innerHTML = text
    return div;
  }

  createImageNode(img_url) {
    const div = document.createElement('div');
    div.className = 'carousel__thumbnails__content__img'
    div.style.backgroundImage = `url(${img_url})`
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundSize = 'cover';
    return div;
  }
}