
var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("enlarged-image");
var images = document.querySelectorAll(".zoomable-image");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = this.src;
    });
});

var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
