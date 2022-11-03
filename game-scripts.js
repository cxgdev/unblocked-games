var titleText = document.getElementById("game-title");
var devText = document.getElementById("game-dev");

fetch('./game.json')
    .then(response => response.json())
    .then(data => {
        titleText.innerHTML = data.title;
        devText.innerHTML = data.developer;
    });

var fullscreenButton = document.getElementById("fullscreen");
var gameEmbed = document.getElementById("game-iframe");

fullscreenButton.addEventListener("click", () => {
    if (gameEmbed.requestFullscreen) {
        gameEmbed.requestFullscreen();
    } else if (gameEmbed.webkitRequestFullscreen) { /* Safari */
        gameEmbed.webkitRequestFullscreen();
    } else if (gameEmbed.msRequestFullscreen) { /* IE11 */
        gameEmbed.msRequestFullscreen();
    }
});
