async function loadSliders() {
    try {
        const res = await fetch("/Data/sliders.json");
        const sliders = await res.json();

        sliders.forEach(slider => {
            const container = document.getElementById(slider.id);

            if (!container) {
                console.warn(`Slider container '${slider.id}' not found.`);
                return;
            }

            container.innerHTML = "";

            const beforeImg = document.createElement("img");
            beforeImg.src = slider.before;
            beforeImg.alt = "Before";

            const afterImg = document.createElement("img");
            afterImg.src = slider.after;
            afterImg.alt = "After";

            container.appendChild(beforeImg);
            container.appendChild(afterImg);

            new ImageCompare(container, {
				smoothingAmount: 0,
                startingPoint: 50
            }).mount();
        });
    }
    catch (err) {
        console.error("Failed to load sliders:", err);
    }
}

loadSliders();