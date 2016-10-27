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
}