window.addEventListener("load", () => {
    const element = document.getElementById("work-showcase1");

    new ImageCompare(element, {
		imageSmoothingEnabled: false,
        showLabels: false,
        startingPoint: 50,
    }).mount();
	
	const element1 = document.getElementById("work-showcase2");

    new ImageCompare(element1, {
		imageSmoothingEnabled: false,
        showLabels: false,
        startingPoint: 50,
    }).mount();
});