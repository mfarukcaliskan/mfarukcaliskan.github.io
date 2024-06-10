const devamı1 = document.getElementById("devamı1");
const devamı2 = document.getElementById("devamı2");
const kapsayici = document.querySelector(".kapsayici");

devamı1.addEventListener("click", () => {
	kapsayici.classList.remove("sağ-panel-aktif");
});

devamı2.addEventListener("click", () => {
	kapsayici.classList.add("sağ-panel-aktif");
});
document.addEventListener('DOMContentLoaded', function () {
    var temaCheckbox = document.getElementById('tema');
    var bodyElement = document.body;
    var kaplamaElement = document.querySelector('.kaplama');

    function updateBackground() {
        var backgroundImageUrl = temaCheckbox.checked ? 'url("https://images8.alphacoders.com/133/1337140.png")':'url("img.jpg")' ;
        bodyElement.style.backgroundImage = backgroundImageUrl;
        kaplamaElement.style.backgroundImage = backgroundImageUrl;
    }

    temaCheckbox.addEventListener('change', updateBackground);
    updateBackground();
});
  
