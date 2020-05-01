
// 1. Создать страницу, которая выводит нумерованный список песен:
const playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
}, {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
}, {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
}, {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
}, {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
}, {
    author: "AC/DC",
    song: "BACK IN BLACK"
}, {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
}, {
    author: "METALLICA",
    song: "ENTER SANDMAN"
}];
for (item of playList) {
    let li = document.createElement("li");
    li.innerText = `${item.author} - ${item.song}`;
    document.getElementById("play-list").appendChild(li);
};

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
function openModal(style) {
    if (style === "hiden") {
        document.querySelector(".modal").style.display = "block";
    } else {
        document.querySelector(".modal").style.display = "none";
    }
}
// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
// !! eror !!
let lights = document.getElementById("lights");
let li = lights.children;
function changeLights(n) {
    console.log(n)
    if (n === 0) {
        li[0].style.background = "red";
    } else if (n === 1) {
        li[1].style.background = "yellow";
    } else {
        li[2].style.background = "green";
    }
    n++;
}