window.onload = () => {
  getGames();

  function getGames() {
    const gamesArray = localStorage.getItem('gamesArray');
    if(gamesArray) {
      JSON.parse(gamesArray).forEach(createThumbnail)
      return;
    }
    const baseUrl = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_09/day_20/master_scoreboard.json';
    fetch(baseUrl)
      .then((response) => {
        response.json().then((json) => {
          localStorage.setItem("gamesArray", JSON.stringify(json.data.games.game))
          json.data.games.game.forEach(createThumbnail);
        });
      })
      .catch(err => err);
  }

  function createThumbnail(game) {
    new CarouselThumbnailView(game, document.querySelector('.carousel__thumbnails'));
  }

  function getElements() {
    const elements = document.querySelectorAll('.carousel__thumbnails__content');
    return {
      elements,
      first: elements[0],
      last: elements[elements.length -1],
      parent: elements[0].parentNode
    };
  }

  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const { elements, first, last, parent } = getElements();
      if(e.target.classList.contains('prev')) {
        parent.removeChild(first);
        parent.appendChild(first);
      }
      parent.removeChild(last);
      parent.insertBefore(last, first);
    });
  });
}
