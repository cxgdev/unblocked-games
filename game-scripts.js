/*
    <div class="container">
        <div class="game-container" id="gm4html5_div_id">
            <iframe frameborder="0" allowfullscreen="" webkitallowfullscreen="true" mozallowfullscreen="true"
                oallowfullscreen="true" msallowfullscreen="true" type="text/html" src="./game/index.html"
                id="game-iframe" style="aspect-ratio: 16 / 9;" width="100%"></iframe>
            <div class="game-container__info">
                <div class="game-container__info__text">
                    <span class="game-container__info-heading" id="game-title">Retro Bowl</span>
                    <span class="game-container__info-description" id="game-dev">by New Star Games</span>
                </div>
                <button class="mdc-button mdc-button--raised" id="fullscreen">
                    <span class="mdc-button__ripple"></span>
                    <span class="mdc-button__label">FULLSCREEN</span>
                </button>
            </div>
        </div>
    </div>
*/

/*
    Create HTML
*/

let title;
let developer;

fetch('./game.json')
    .then(response => response.json())
    .then(data => {
        title = data.tile;
        developer = data.developer;
    });

document.open();
document.write(`<div class="container"><div class="game-container" id="gm4html5_div_id"><iframe frameborder="0" allowfullscreen="" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" type="text/html" src="./game/index.html" id="game-iframe" style="aspect-ratio: 16 / 9;" width="100%"></iframe><div class="game-container__info"><div class="game-container__info__text"><span class="game-container__info-heading" id="game-title">${title}</span><span class="game-container__info-description" id="game-dev">by ${developer}</span></div><button class="mdc-button mdc-button--raised" id="fullscreen"><span class="mdc-button__ripple"></span><span class="mdc-button__label">FULLSCREEN</span></button></div></div></div>`);
document.close();

/*
// Main Container
var container = document.createElement('div');
container.classList.add('container');
// Game Container
var gameContainer = document.createElement('div');
container.classList.add('game-container');
container.id = "gm4html5_div_id";

// Game iframe
var gameEmbed = document.createElement('iframe');
gameEmbed.setAttribute("frameborder", "0");
gameEmbed.setAttribute("webkitallowfullscreen", "true");
gameEmbed.setAttribute("mozallowfullscreen", "true");
gameEmbed.setAttribute("oallowfullscreen", "true");
gameEmbed.setAttribute("msallowfullscreen", "true");
gameEmbed.setAttribute("type", "text/html");
gameEmbed.setAttribute("src", "./game/index.html");
gameEmbed.setAttribute("style", "aspect-ratio: 16 / 9;");
gameEmbed.setAttribute("width", "100%");

// Game Info
var infoContainebbr = document.createElement('div');
infoContainer.classList.add("game-container__info");
var infoTextContainer = document.createElement('div');
infoContainer.classList.add("game-container__info__text");

// Game Info Text
var gameTitle = document.createElement('span');
gameTitle.classList.add("game-container__info-heading");
var gameDeveloper = document.createElement('span');
gameDeveloper.classList.add("game-container__info-description");

// Fullscreen Button
var fullscreenButton = document.createElement('button');
fullscreenButton.classList.add('mdc-button mdc-button--raised');
var buttonRipple = document.createElement('span');
buttonRipple.classList.add("mdc-button__ripple");
var buttonLabel = document.createElement('span');
buttonRipple.classList.add("mdc-button__label");

infoTextContainer.appendChild(gameTitle);
infoTextContainer.appendChild(gameDeveloper);
infoContainer.appendChild(infoTextContainer);
infoContainer.appendChild(fullscreenButton);
gameContainer.appendChild(gameEmbed);
gameContainer.appendChild(infoContainer);
container.appendChild(gameContainer);

document.body.appendChild(container);
*/

fullscreenButton.addEventListener("click", () => {
    if (gameEmbed.requestFullscreen) {
        gameEmbed.requestFullscreen();
    } else if (gameEmbed.webkitRequestFullscreen) { /* Safari */
        gameEmbed.webkitRequestFullscreen();
    } else if (gameEmbed.msRequestFullscreen) { /* IE11 */
        gameEmbed.msRequestFullscreen();
    }
});
