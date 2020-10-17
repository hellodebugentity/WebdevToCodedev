(function () {
    "use strict";

    var d = document,
        $ = e => d.querySelector(e);

    console.log($('#hello'));

    var cube = document.getElementById('cube');

    var min = 1;
    var max = 24;

    cube.onclick = () => {
        var xRand = getRandom(max, min);
        var yRand = getRandom(max, min);

        cube.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
        cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    }

    function getRandom(max, min) {
        return (Math.floor(Math.random() * (max - min)) + min) * 90;
    }


    var topic = d.querySelectorAll('.dot');


    for (var i = 0; i < 6; i++) {
        topic[i].onclick = handlePopup;
    }

    function handlePopup() {
        console.log(this);
    }


})();