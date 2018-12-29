document.addEventListener("DOMContentLoaded", () => {
    const map = new Array(10000)
          .fill(0)
          .map(() => "#" + ((1<<24)*Math.random()|0).toString(16));
    const pixelmap = document.getElementById("pixelmap");
    for (let cell of map) {
        const pixel = document.createElement("div");
        pixel.classList.add('pixel');
        pixel.textContent = window.location.hash;
        pixel.style.backgroundColor = cell;
        pixel.addEventListener('click', event => {
            console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", cell);
        }, false);
        pixelmap.appendChild(pixel);
    }
});
