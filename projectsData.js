
// Function to load and display projects
function loadProjects() {
    const container = document.getElementById("container-projects");

    // Cargar el archivo JSON
    fetch('portfolio.json')
        .then(response => response.json())
        .then(data => {
            // Generate HTML content dynamically
            data.forEach(project => {
                const projectDiv = createProjectElement(project);
                container.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error loading JSON file:', error));
}

// Function to create the HTML element of a project
function createProjectElement(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    // Add image
    const coverImg = document.createElement("img");
    coverImg.src = project.cover;
    coverImg.classList.add("project-image");
    projectDiv.appendChild(coverImg);

    // Add title
    const titleH2 = document.createElement("h2");
    titleH2.textContent = project.title;
    titleH2.classList.add("project-title");
    projectDiv.appendChild(titleH2);

    // Add description
    const descriptionP = document.createElement("p");
    descriptionP.textContent = project.description;
    descriptionP.classList.add("project-description");
    projectDiv.appendChild(descriptionP);

    // Add demo link
    const urlA = createLink("DEMO", project.url);
    urlA.classList.add("project-demo-link");
    projectDiv.appendChild(urlA);

    // Add code link
    const codeA = createLink("CODE", project.code);
    codeA.classList.add("project-code-link");
    projectDiv.appendChild(codeA);

    return projectDiv;
}

// Function to create a link with customized text
function createLink(text, url) {
    const link = document.createElement("a");
    link.textContent = text;
    link.href = url;
    link.target = "_blank";
    return link;
}

// Calling the function to load projects when the page is ready
document.addEventListener("DOMContentLoaded", loadProjects);