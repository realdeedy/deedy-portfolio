async function loadCarouselThumbnails() {
    const res = await fetch("/Data/carousel.json");
    const thumbnails = await res.json();

    const container = document.getElementById("carousel");

    const track = document.createElement("div");
    track.className = "carousel-track";
    container.appendChild(track);

    function addImage(src) {
        const img = document.createElement("img");
        img.src = src;
        img.className = "carousel-thumbnail";
        track.appendChild(img);
    }

    thumbnails.forEach(addImage);
    thumbnails.forEach(addImage);
}

loadCarouselThumbnails();