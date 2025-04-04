document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');

  // Estilos CSS inline
  backToTopButton.style.display = 'none';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.backgroundColor = '#007bff';
  backToTopButton.style.color = 'white';
  backToTopButton.style.padding = '10px 15px';
  backToTopButton.style.borderRadius = '5px';
  backToTopButton.style.textDecoration = 'none';
  backToTopButton.style.fontSize = '1.2em';

  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });
});




// Desabilita o menu de contexto
document.addEventListener("contextmenu", (e) => {
  e.preventDefault()
})

// Desabilita a seleção de texto
document.addEventListener("selectstart", (e) => {
  e.preventDefault()
})

document.addEventListener("DOMContentLoaded", () => {
  // Suavizar a rolagem para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerOffset = document.querySelector(".header")?.offsetHeight || 80 // Ajuste se houver cabeçalho fixo
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })

        // Se o alvo estiver dentro de um <details>, abre automaticamente
        const parentDetails = targetElement.closest("details")
        if (parentDetails) {
          parentDetails.setAttribute("open", "")
        }
      }
    })
  })

  // Prevenir cliques no sumário fechando detalhes sem abrir outros
  document.querySelectorAll(".nav-item details summary").forEach((summary) => {
    summary.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  })
})
// Obtém o botão pelo ID
const btnTopo = document.getElementById("btnTopo")

// Mostra o botão quando o usuário rola para baixo 20px
window.onscroll = () => {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block"
  } else {
    btnTopo.style.display = "none"
  }
}

// Quando o usuário clica no botão, volta para o topo da página
btnTopo.addEventListener("click", () => {
  document.body.scrollTop = 0 // Para navegadores Safari
  document.documentElement.scrollTop = 0 // Para Chrome, Firefox, IE e Opera
})

