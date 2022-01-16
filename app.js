console.log("верстальщик мосрега пидор. Просто посмотрите в раздел вёрстки. ТАМ ПУСТЫЕ ДИВЫ ПО ПРИКОЛУ ЛЕТАЮТ АХАХАХ А Я ЗА ЭТО НАЛОГИ ПЛАЧУ")
const marks = document.querySelectorAll("_2Netl");
const boxShadowDelete = document.querySelectorAll("._1smCg");
const smallMarks = document.querySelectorAll("._2Netl._2TgEf");
const bigMarks = document.querySelectorAll("._2CJJz");
const headerItems = document.querySelectorAll(".header-menu__item");
let rateButton = document.querySelector(".analytics-popup-hint");
function onLoadd() {
    try {
        if (headerItems) {
            for (var i = 0; i < headerItems.length; i++) {
                let elm = headerItems[i]
                var value = elm.querySelector(".header-menu__link")
                if (value.innerHTML) {
                    value = value.innerHTML
                }
                if (value == "Приложения " || value == "Общение " || value == "Профиль ") {
                    elm.style.display = "none";
                }
                console.log(value)
            }
        }
    }
    catch (err) {
        console.log(err)
    }
    try {
        if (boxShadowDelete) {
            for (var i = 0; i < boxShadowDelete.length; i++) {
                let elm = boxShadowDelete[i]
                elm.classList.add('smallMark');
                elm.classList.remove('_1smCg');
            }
        }
    }
    catch (err) {
        console.log(err)
    }
    try {
        if (smallMarks) {
            for (var i = 0; i < smallMarks.length; i++) {
                let elm = smallMarks[i]
                let val = Number(elm.innerHTML)
                switch (val) {
                    case (2): {
                        elm.classList.add("red")
                        break
                    }
                    case (3): {
                        elm.classList.add("orange")
                        break
                    }
                    case (4): {
                        elm.classList.add("green")
                        break
                    }
                    case (5): {
                        elm.classList.add("green")
                        break
                    }
                    default: {
                        elm.classList.add("grey")
                        break
                    }
                }
            }
        }
    }
    catch (err) {
        console.log(err)
    }
    try {
        if (bigMarks) {
            for (var i = 0; i < bigMarks.length; i++) {
                let elm = bigMarks[i]
                let elmNum = elm.querySelector(".qNJLN")
                let val = Number(elmNum.innerHTML)
                switch (val) {
                    case (2): {
                        elm.classList.add("red")
                        break
                    }
                    case (3): {
                        elm.classList.add("orange")
                        break
                    }
                    case (4): {
                        elm.classList.add("green")
                        break
                    }
                    case (5): {
                        elm.classList.add("green")
                        break
                    }
                    default: {
                        elm.classList.add("grey")
                        break
                    }
                }
            }
        }
    }
    catch (err) {
        console.log(err)
    }
    try {
        if (rateButton) {
            rateButton.style.display = "none";
        }
    }
    catch (err) {
        console.log(err)
    }
}
window.onload = onLoadd