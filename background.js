// Back script

chrome.browserAction.onClicked.addListener(function (tab) {

    // Shia takeover
    var aud = new Audio();
    aud.src = "shia.mp3";
    aud.play();
});
