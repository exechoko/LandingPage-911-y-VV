document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initMobileMenu();
    setActiveNav();
    autoplayVideo();
});

function loadHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    header.innerHTML = `
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">
                    <span class="logo-icon">🛡️</span>
                    <span>División 911 y V.V</span>
                </a>
                
                <nav>
                    <ul>
                        <li><a href="index.html" ${currentPage === 'index.html' || currentPage === '' ? 'class="active"' : ''}>Inicio</a></li>
                        <li><a href="dependencias.html" ${currentPage === 'dependencias.html' ? 'class="active"' : ''}>Dependencias y contactos</a></li>
                        <li><a href="galeria.html" ${currentPage === 'galeria.html' ? 'class="active"' : ''}>Galería</a></li>
                        <li><a href="tecnologia.html" ${currentPage === 'tecnologia.html' ? 'class="active"' : ''}>Tecnología y Operaciones</a></li>
                        <li><a href="faq.html" ${currentPage === 'faq.html' ? 'class="active"' : ''}>Preguntas frecuentes</a></li>
                    </ul>
                </nav>
                
                <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
            </div>
            
            <nav class="mobile-nav" id="mobileNav">
                <ul>
                    <li><a href="index.html" ${currentPage === 'index.html' || currentPage === '' ? 'class="active"' : ''}>Inicio</a></li>
                    <li><a href="dependencias.html" ${currentPage === 'dependencias.html' ? 'class="active"' : ''}>Dependencias y contactos</a></li>
                    <li><a href="galeria.html" ${currentPage === 'galeria.html' ? 'class="active"' : ''}>Galería</a></li>
                    <li><a href="tecnologia.html" ${currentPage === 'tecnologia.html' ? 'class="active"' : ''}>Tecnología y Operaciones</a></li>
                    <li><a href="faq.html" ${currentPage === 'faq.html' ? 'class="active"' : ''}>Preguntas frecuentes</a></li>
                </ul>
            </nav>
        </div>
    `;
}

function loadFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>
                        <span>🛡️</span>
                        División 911 y V.V
                    </h3>
                    <p>Compromiso con la Seguridad y la Comunidad</p>
                </div>
                
                <div class="footer-section">
                    <h3>Emergencias</h3>
                    <p>📞 911</p>
                </div>
                
                <div class="footer-section">
                    <h3>Secciones</h3>
                    <ul>
                        <li>DIV. 911 y V.V - EMERGENCIAS</li>
                        <li>Sección Técnica</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} División 911 y Videovigilancia - Policía de Entre Ríos</p>
            </div>
        </div>
    `;
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            this.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
        });

        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            });
        });
    }
}

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function autoplayVideo() {
    const videoContainer = document.querySelector('.video-container iframe');
    if (videoContainer) {
        const src = videoContainer.src;
        if (!src.includes('autoplay=1')) {
            videoContainer.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1';
        }
    }
}
