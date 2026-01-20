let isPlaying = false;
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function bukaUndangan() {
    document.querySelector('.cover').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('to');
    document.getElementById('namaTamu').innerText = nama ? nama : 'Tamu Undangan';

    music.play();
    isPlaying = true;
    musicBtn.innerText = '🔊';
}

/* MUSIK */
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        musicBtn.innerText = '🔇';
    } else {
        music.play();
        isPlaying = true;
        musicBtn.innerText = '🔊';
    }
}

/* KIRIM WA */
function kirimRSVP() {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('to') || 'Tamu Undangan';

    const noWA = '6281227292806'; // ganti nomor klien
    const pesan = `Halo, saya ${nama}. Saya akan hadir di acara Angga & Zahra pada 20 Oktober 2026.`;

    const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}
const targetDate = new Date("2026-01-20T11:35:00").getTime();

/* COUNTDOWN */
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector('.countdown').innerHTML = "Acara sedang berlangsung 🎉";
        return;
    }

    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
