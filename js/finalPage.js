let winners = [];
let i = 1;
const keys = Object.keys(localStorage);

keys.forEach(key => {
    if (key.startsWith("Winner")) {
        winners.push(localStorage.getItem(key))
    }


});

console.log(winners);

const scores = winners.map(item => {
    const [name, score] = item.split(': ');
    return { name, score: parseInt(score) };
});


scores.sort((a, b) => b.score - a.score);


scores.forEach(item => {


    console.log(i);
    let name = document.querySelector(`#name_${i}`);
    name.innerHTML = `${item.name}`
    let mark = document.querySelector(`#mark_${i}`);
    mark.innerHTML = `${item.score}`
    i++



});
// Confetti Animation

let snowEffect = function () {
    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                y: (Math.random() * skew) - 0.2
            },
            colors: ['FFE400'],
            shapes: ['circle', 'rectangle'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());
};

snowEffect();