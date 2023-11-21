let myModal = document.getElementById('modaleSupp');
let triggerBttn = document.getElementById("modaleTrigger");
let closeModale = document.getElementById('closeModale');

// afficher modale quand on clique sur le lien modaleTrigger
if (triggerBttn) {
    triggerBttn.addEventListener("click", function () {
        showModale();
    });
}

// fermer la modale quand on clique sur Fermer
if (closeModale) {
    closeModale.addEventListener("click", function () {
        hideModale();
    });
}
// au chargement de la page la modale est à display none
window.addEventListener("load", function () {
    hideModale();
});

function showModale() {
    myModal.style.display = "block";
    document.body.style.overflow = 'hidden';
    myModal.style.overflow = 'auto';
}

function hideModale() {
    myModal.style.display = "none";
    document.body.style.overflow = 'auto';
    myModal.style.overflow = 'hidden';
}

