window.onload = () => {
  getGames();

  function getGames() {
    const baseUrl = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_09/day_20/master_scoreboard.json'
    fetch(baseUrl)
      .then((response) => {
        response.json().then((json) => {
          json.data.games.game.forEach((game) => {
            new GameView(game, document.querySelector('.carousel__thumbnails'));
          });
        });
      })
      .catch(err => err);
  }

  function getElements() {
    const elements = document.querySelectorAll('.carousel__thumbnails__content');
    return {
      elements,
      first: elements[0],
      last: elements[elements.length -1],
      parent: elements[0].parentNode
    }
  }

  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log('clicked')
      const { elements, first, last, parent } = getElements();
      if(e.target.classList.contains('prev')) {
        parent.removeChild(first);
        parent.appendChild(first);
      } else if(e.target.classList.contains('next')) {
        parent.removeChild(last);
        parent.insertBefore(last, first);
      }
    })
  })
}