window.addEventListener("load", () => {
    const element = document.getElementById("hp-showcase-tn");

    new ImageCompare(element, {
		imageSmoothingEnabled: false,
        showLabels: false,
        startingPoint: 50
    }).mount();
});