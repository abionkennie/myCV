const Gallery = document.querySelector("#gallery .box-container")
const hidePics = document.forms('hide-pics')
hidePics.addEventListener('change', function(e) {
    if (hidePics.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
})