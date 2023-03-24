var count = 0;
var color_idx = 0;
const colors = ["", "blue", "rgba(133,122,200)", "#f15025", "gray", "red"];
const color = document.querySelector(".color");
const value = document.querySelector("#value");

    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        const randomNumber = getRandomNumber();
        if (color_idx > 5) {
            color_idx = 0;
        }
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];

       if (styles.contains("increase")) {
            count++;
            if (count > 5) {
                count = 0;
            }
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });

function getRandomNumber() {
    return ++color_idx;
}