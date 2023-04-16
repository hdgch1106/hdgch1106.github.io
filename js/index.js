/*Footer year*/
let year = new Date()
let current_year = document.getElementById("current_year")
current_year.innerText = year.getFullYear()

/*Function on scroll*/
const contactSection = document.querySelector("#contact-section");

window.addEventListener("scroll", () => {
    // Altura de la ventana del navegador
    const windowHeight = window.innerHeight;
    // Altura total de la página
    const pageHeight = document.body.scrollHeight;
    // Posición actual del scroll
    const scrollPosition = window.scrollY;

    // Si el usuario ha llegado al final de la página
    if (windowHeight + scrollPosition >= pageHeight) {
        // Cambiar el valor del z-index de la sección de contacto a 1
        contactSection.style.zIndex = "1";
    } else {
        // Si no ha llegado al final, mantener el z-index en -1
        contactSection.style.zIndex = "-1";
    }
});

/*Contact*/
function toContact() {
    let contactSection = document.getElementsByClassName('contact_section')
    let contactSection_0 = contactSection[0]
  
    let contactEl = document.documentElement.offsetHeight - contactSection_0.offsetHeight

    window.scroll({
      top: contactEl,
      left: 0,
      behavior: 'smooth'
    });
  }

  /*Projects*/

  function showProject(project) {
    /* Descriptions and Titles */
    let title = project.dataset.title
    let image = project.children[0].src
    let link = project.dataset.link
    let desc = project.dataset.desc
    let tools = project.dataset.tools.split(',')
  
    let toolsSize = tools.length
  
    /* Components of pop up Project */
    let popup = document.getElementById('project-popup')
    let projectTitle = document.getElementById('project-name')
    let projectImage = document.getElementById('project-img')
    let projectLink = document.getElementById('project-link')
    let projectDesc = document.getElementById('project-desc')
    let projectList = document.getElementById('project-list')
    
    /* Los datos de data-* en el pop up */
    projectTitle.textContent = title
    projectImage.src = image
    projectLink.href = link
    projectDesc.textContent = desc
  
    /* Iterando sobre un array, mientras esto pasa también se crea una lista */
    for (let i = 0; i < toolsSize; i++) {  
      let li = document.createElement('li')
      projectList.appendChild(li)
      li.textContent = tools[i]
      li.setAttribute('id', 'project-tool')
    }
    popup.style.display = 'flex'
    popup.classList.replace('d-none', 'popup')
  }

  function closeProject() {
    let popup = document.getElementById('project-popup')
    let projectList = document.getElementById('project-list')
  
    let projectListSize = projectList.childElementCount
  
    for (let i = 0; i < projectListSize; i++) {  
      projectList.removeChild(projectList.children[0])
    }
    popup.style.display = 'none'
  }