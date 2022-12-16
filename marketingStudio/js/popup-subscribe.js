let popupSubscription = document.querySelector('.popup-subscribe');
let subscribeCloseBtn = document.querySelector('.popup-subscribe__close-button');
// let subscribePopup = document.querySelector('.popup-subscribe');

function closeSubscribePopup(){
    popupSubscription.style.display = "none";
}

window.onload = function() {
    setTimeout(function() {
        popupSubscription.style.display = "flex";
    }, 2000);
  }

subscribeCloseBtn.addEventListener('click', closeSubscribePopup);

