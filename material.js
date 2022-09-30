const MDCRipple = mdc.ripple.MDCRipple;

const buttonElements = document.getElementsByClassName('mdc-button');
const buttons = Array.prototype.slice.call(buttonElements);
buttons.forEach(element => {
    new MDCRipple(element);
});

const cardElements = document.getElementsByClassName('mdc-card');
const cards = Array.prototype.slice.call(cardElements);
cards.forEach(element => {
    new MDCRipple(element);
});