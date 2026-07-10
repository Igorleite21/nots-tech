// ==========================================================================
// NOTS TECH — main.js
// ==========================================================================
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5511954079574";

  function waLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  // ------------------------------------------------------------------------
  // Product catalog
  // ------------------------------------------------------------------------
  const PRODUCTS = [
    {
      name: "Notebook Dell Latitude",
      tag: "Notebook",
      desc: "Notebook corporativo robusto, ideal para produtividade e uso profissional diário.",
      specs: ["Intel Core i5", "8GB RAM", "SSD 256GB", "Full HD"],
      price: "R$ 2.199",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Notebook HP ProBook",
      tag: "Notebook",
      desc: "Leve, resistente e confiável para trabalho e estudos.",
      specs: ["Intel Core i5", "8GB RAM", "SSD 256GB", "Webcam HD"],
      price: "R$ 2.099",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Notebook Lenovo ThinkPad",
      tag: "Notebook",
      desc: "Referência em durabilidade e teclado, perfeito para uso intenso.",
      specs: ["Intel Core i7", "16GB RAM", "SSD 512GB", "Full HD"],
      price: "R$ 2.899",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Notebook Gamer Acer Nitro",
      tag: "Gamer",
      desc: "Entrada no universo gamer com ótimo custo-benefício.",
      specs: ["Intel Core i5", "RTX 3050", "16GB RAM", "SSD 512GB"],
      price: "R$ 3.799",
      img: "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Notebook Gamer ASUS TUF",
      tag: "Gamer",
      desc: "Resistência militar e desempenho para jogos pesados.",
      specs: ["Ryzen 7", "RTX 4060", "16GB RAM", "SSD 1TB"],
      price: "R$ 4.999",
      img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Notebook Gamer Dell G15",
      tag: "Gamer",
      desc: "Design robusto com ótima refrigeração para longas sessões.",
      specs: ["Intel Core i7", "RTX 3060", "16GB RAM", "SSD 512GB"],
      price: "R$ 4.599",
      img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Notebook Gamer Lenovo LOQ",
      tag: "Gamer",
      desc: "Alto desempenho gráfico com visual moderno e discreto.",
      specs: ["Intel Core i5", "RTX 4050", "16GB RAM", "SSD 512GB"],
      price: "R$ 4.299",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "PC Gamer Básico",
      tag: "PC Gamer",
      desc: "Ideal para quem está começando no mundo dos jogos.",
      specs: ["Ryzen 5", "GTX 1660 Super", "16GB RAM", "SSD 480GB"],
      price: "R$ 3.299",
      img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "PC Gamer Intermediário",
      tag: "PC Gamer",
      desc: "Equilíbrio perfeito entre performance e investimento.",
      specs: ["Ryzen 5", "RTX 3060", "16GB RAM", "SSD 1TB"],
      price: "R$ 4.799",
      img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "PC Gamer High-End",
      tag: "PC Gamer",
      desc: "Máxima performance para jogos em alta resolução e streaming.",
      specs: ["Ryzen 7", "RTX 4070", "32GB RAM", "SSD 1TB"],
      price: "R$ 8.999",
      img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Monitor Gamer",
      tag: "Periférico",
      desc: "Alta taxa de atualização para resposta rápida e fluida.",
      specs: ['24" Full HD', "165Hz", "1ms", "Painel IPS"],
      price: "R$ 899",
      img: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Kit Gamer",
      tag: "Periférico",
      desc: "Teclado, mouse e headset para completar sua estação gamer.",
      specs: ["Teclado mecânico", "Mouse RGB", "Headset c/ mic"],
      price: "R$ 349",
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    },
  ];

  function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = PRODUCTS.map((p) => {
      const specs = p.specs.map((s) => `<span>${s}</span>`).join("");
      const msg = `Olá! Tenho interesse neste equipamento: ${p.name}. Pode me passar mais informações?`;
      return `
        <article class="product-card glass reveal">
          <div class="product-card__img">
            <span class="product-card__tag">${p.tag}</span>
            <img src="${p.img}" alt="${p.name}" loading="lazy"
                 onerror="this.parentElement.classList.add('img-fallback'); this.style.display='none';">
          </div>
          <div class="product-card__body">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="product-card__specs">${specs}</div>
            <div class="product-card__footer">
              <div class="product-card__price">
                <small>a partir de</small>
                <strong>${p.price}</strong>
              </div>
              <a class="btn btn--whatsapp" href="${waLink(msg)}" target="_blank" rel="noopener">
                <svg class="icon-wa"><use href="#icon-whatsapp"></use></svg> Mais informações
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ------------------------------------------------------------------------
  // Testimonials
  // ------------------------------------------------------------------------
  const TESTIMONIALS = [
    { name: "Ricardo M.", initials: "RM", text: "Excelente atendimento do início ao fim. Me senti seguro em cada etapa da compra." },
    { name: "Fernanda S.", initials: "FS", text: "Notebook impecável, exatamente como combinado. Superou minhas expectativas." },
    { name: "Camila R.", initials: "CR", text: "Muito transparente em toda a negociação. Recomendo de olhos fechados." },
    { name: "Bruno T.", initials: "BT", text: "Atendimento nota 10 e pós-venda de verdade. Voltarei a comprar com certeza." },
    { name: "Juliana A.", initials: "JA", text: "Entrega rápida e equipamento muito bem cuidado. Experiência excelente." },
  ];

  let currentTestimonial = 0;

  function renderTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dots = document.getElementById("testimonialDots");
    if (!track || !dots) return;

    track.innerHTML = TESTIMONIALS.map(
      (t) => `
        <div class="testimonial">
          <div class="testimonial__stars">
            ${"<i data-lucide=\"star\"></i>".repeat(5)}
          </div>
          <p class="testimonial__text">"${t.text}"</p>
          <div class="testimonial__author">
            <div class="testimonial__avatar">${t.initials}</div>
            <div>
              <strong>${t.name}</strong>
              <span>Cliente NOTS TECH</span>
            </div>
          </div>
        </div>
      `
    ).join("");

    dots.innerHTML = TESTIMONIALS.map((_, i) => `<button data-index="${i}" aria-label="Ir para depoimento ${i + 1}"></button>`).join("");
  }

  function goToTestimonial(index) {
    const track = document.getElementById("testimonialTrack");
    const dots = document.querySelectorAll("#testimonialDots button");
    currentTestimonial = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === currentTestimonial));
  }

  function initCarousel() {
    if (!document.getElementById("testimonialTrack")) return;
    goToTestimonial(0);

    document.getElementById("prevTestimonial").addEventListener("click", () => goToTestimonial(currentTestimonial - 1));
    document.getElementById("nextTestimonial").addEventListener("click", () => goToTestimonial(currentTestimonial + 1));
    document.getElementById("testimonialDots").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (btn) goToTestimonial(Number(btn.dataset.index));
    });

    let autoplay = setInterval(() => goToTestimonial(currentTestimonial + 1), 6000);
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("mouseenter", () => clearInterval(autoplay));
    carousel.addEventListener("mouseleave", () => {
      autoplay = setInterval(() => goToTestimonial(currentTestimonial + 1), 6000);
    });
  }

  // ------------------------------------------------------------------------
  // WhatsApp link binding (data-msg attributes)
  // ------------------------------------------------------------------------
  function bindWhatsappLinks() {
    document.querySelectorAll(".js-wa").forEach((el) => {
      const msg = el.dataset.msg || "Olá! Vim pelo site da NOTS TECH.";
      el.setAttribute("href", waLink(msg));
    });
  }

  // ------------------------------------------------------------------------
  // Header scroll state
  // ------------------------------------------------------------------------
  function initHeaderScroll() {
    const header = document.getElementById("header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ------------------------------------------------------------------------
  // Mobile menu
  // ------------------------------------------------------------------------
  function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    });

    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) window.lucide.createIcons();
      })
    );
  }

  // ------------------------------------------------------------------------
  // FAQ accordion
  // ------------------------------------------------------------------------
  function initFaq() {
    document.querySelectorAll(".faq__item").forEach((item) => {
      item.querySelector(".faq__question").addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");
        document.querySelectorAll(".faq__item").forEach((i) => i.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
  }

  // ------------------------------------------------------------------------
  // Scroll reveal
  // ------------------------------------------------------------------------
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((item) => observer.observe(item));
  }

  // ------------------------------------------------------------------------
  // Init
  // ------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderTestimonials();
    bindWhatsappLinks();
    initHeaderScroll();
    initMobileMenu();
    initFaq();
    initCarousel();

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (window.lucide) window.lucide.createIcons();
    initReveal();
  });
})();
