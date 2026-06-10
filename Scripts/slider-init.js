window.addEventListener("load", () => {
    const element = document.getElementById("thumbnail-comparison");

    new ImageCompare(element, {
        showLabels: true,
        startingPoint: 50
    }).mount();
});