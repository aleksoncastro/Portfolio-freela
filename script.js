// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}
//Galeria de Imagem
const galleries = [
  [
    "./assets/ecommerce_placasv/home.png",
    "./assets/ecommerce_placasv/produtos.png",
    "./assets/ecommerce_placasv/produto_details.png",
    "./assets/ecommerce_placasv/register.png",
    "./assets/ecommerce_placasv/cadastro_cliente.jpeg",
    "./assets/ecommerce_placasv/perfil_usuario.jpeg",
    "./assets/ecommerce_placasv/carrinho_compra.jpeg",
    "./assets/ecommerce_placasv/resumo_pedido.jpeg",
    "./assets/ecommerce_placasv/pagamento.jpeg",
    "./assets/ecommerce_placasv/recibo_compra.jpeg",
    "./assets/ecommerce_placasv/recibo_compra2.jpeg",
    "./assets/ecommerce_placasv/detalhes_pedido.jpeg",
    "./assets/ecommerce_placasv/pastas_front.jpeg"


  ],
  [
    "./assets/api_java/uml-tp1.png",
    "./assets/api_java/api01.png",
    "./assets/api_java/api02.png",
    "./assets/api_java/pastas_api.jpeg"
  ],
  [
    "./assets/lp_contabilidade/01.png",
    "./assets/lp_contabilidade/02.png",
    "./assets/lp_contabilidade/03.png",
    "./assets/lp_contabilidade/04.png",
    "./assets/lp_contabilidade/05.png"
  ]
];

let currentGallery = 0;
let currentImage = 0;

const modal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");

function openGallery(index) {
  currentGallery = index;
  currentImage = 0;
  galleryImage.src = galleries[index][0];
  modal.style.display = "flex";
}

function closeGallery() {
  modal.style.display = "none";
}

function nextImage() {
  currentImage = (currentImage + 1) % galleries[currentGallery].length;
  galleryImage.src = galleries[currentGallery][currentImage];
}

function prevImage() {
  currentImage = (currentImage - 1 + galleries[currentGallery].length) % galleries[currentGallery].length;
  galleryImage.src = galleries[currentGallery][currentImage];
}

// Fecha modal ao clicar fora da imagem
window.onclick = (event) => {
  if (event.target === modal) closeGallery();
};


window.addEventListener('scroll', highlightNavigation);