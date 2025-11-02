// Menunggu semua konten HTML dimuat sebelum menjalankan JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Ambil semua elemen yang kita perlukan
    const heroCards = document.querySelectorAll('.hero-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // 2. Tambahkan fungsi 'klik' untuk setiap kartu pahlawan
    heroCards.forEach(card => {
        card.addEventListener('click', () => {
            // Dapatkan ID modal dari atribut 'data-target'
            const targetModalId = card.getAttribute('data-target');
            const modal = document.getElementById(targetModalId);
            
            if (modal) {
                // Tampilkan modal dengan menambahkan kelas 'show'
                modal.classList.add('show');
            }
        });
    });

    // 3. Tambahkan fungsi 'klik' untuk tombol close (X)
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Temukan modal terdekat dan hilangkan kelas 'show'
            button.closest('.modal').classList.remove('show');
        });
    });

    // 4. Tambahkan fungsi 'klik' pada area di luar modal (latar belakang gelap)
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            // Jika yang diklik adalah elemen modal itu sendiri (latar belakangnya)
            if (event.target == modal) {
                modal.classList.remove('show');
            }
        });
    });
});