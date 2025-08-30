document.addEventListener('DOMContentLoaded', function() {

    // ==========================================================
    // BAGIAN 1: PENGATURAN ELEMEN & FUNGSI UTAMA
    // ==========================================================
    const welcomeModal = document.getElementById('welcome-modal');
    const nameForm = document.getElementById('name-form');
    const nameInput = document.getElementById('name-input');
    const heroWelcomeText = document.getElementById('typing-text');

    
    function startTypewriter(element, text) {
        if (!element) return; 

        element.textContent = ''; 
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 150);
            }
        }
        type(); 
    }

    // ==========================================================
    // BAGIAN 2: LOGIKA SAAT HALAMAN DIBUKA (SELALU TAMPILKAN POP-UP)
    // ==========================================================
    if (welcomeModal && nameForm && nameInput && heroWelcomeText) {
        
        
        heroWelcomeText.textContent = ''; 

        
        nameForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userName = nameInput.value.trim();

            if (userName !== '') {
                const welcomeMessage = `Hi ${userName}, Welcome To My Website`;
                
               
                welcomeModal.classList.add('hidden');
                
                
                startTypewriter(heroWelcomeText, welcomeMessage);

            } else {
                alert('Nama tidak boleh kosong!');
            }
        });
    }


    // ==========================================================
    // BAGIAN 3: LOGIKA UNTUK FORM "MESSAGE US" & WAKTU
    // ==========================================================
    const currentTimeElement = document.getElementById('current-time');
    if (currentTimeElement) {
        const now = new Date();
        currentTimeElement.textContent = now.toString();
    }

    const messageForm = document.getElementById('message-form');
   
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('input-name').value;
            const date = document.getElementById('input-date').value;
            const genderRadio = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('input-message').value;

            if (name.trim() === "") {
                alert("Nama tidak boleh kosong!");
                return;
            }
            
            const gender = genderRadio ? genderRadio.value : "-";

            document.getElementById('display-name').textContent = name;
            document.getElementById('display-date').textContent = date || "-";
            document.getElementById('display-gender').textContent = gender;
            document.getElementById('display-message').textContent = message || "-";
            
            messageForm.reset();
        });
    }

});


document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollThreshold = window.innerHeight * 0.5; // Muncul setelah menggulir setengah tinggi layar

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Panggil saat halaman dimuat untuk memeriksa posisi awal
    window.addEventListener('load', () => {
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.classList.add('visible');
        }
    });
});

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



const mainContent = document.getElementById("main-content");

document.addEventListener("DOMContentLoaded", function() {
    mainContent.classList.add("visible");
});