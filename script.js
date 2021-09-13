const Gallery = document.querySelector("#gallery .box-container")
const btnP = document.querySelectorAll('.btn');

btnP.forEach(btn => {
    btn.addEventListener('click', (e) => {
        var btnId = e.target.id;
        var pTag = document.querySelector("#" + btnId + "-info-tag").innerHTML;
        alert(pTag)
    });
});