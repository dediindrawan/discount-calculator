// execute jumbotron button onclick
document.querySelector('.btn-explore').addEventListener('click', () => {
    window.location.href = '#about';
});

// execute show navlink
function openNavlink() {
    document.querySelector('.navlink').classList.toggle('show-navlink')
};

// execute button onclick
function openTambahkanDiskon() {
    window.location.href = 'tambahkan-diskon.html';
};
function openTambahkanDbDiskon() {
    window.location.href = 'tambahkan-db-diskon.html';
};
function openKurangiDiskon() {
    window.location.href = 'kurangi-diskon.html';
};
function openKurangiDbDiskon() {
    window.location.href = 'kurangi-db-diskon.html';
};
