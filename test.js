

document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("carousel");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let projects = [];
    let currentIndex = 0;

    function showProject(index) {
        const project = projects[index];
        const projectHTML = `
            <div class="project">
                <img src="${project.cover}" alt="Project Cover">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer">Url</a>
                <a href="${project.code}" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
        `;
        carouselContainer.innerHTML = projectHTML;
    }

    function updateArrows() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === projects.length - 1;
    }

    async function fetchProjects() {
        try {
            const response = await fetch('portfolio.json');
            projects = await response.json();
            showProject(currentIndex);
            updateArrows();
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    function loadProjectsIntoContainer(container, projects) {
        // Generate HTML content dynamically
        projects.forEach(project => {
            const projectDiv = createProjectElement(project);
            container.appendChild(projectDiv);
        });
    }

    function createProjectElement(project) {
        // Implement the logic to create an HTML element for a project
        // (Similar to the logic in your existing loadProjects function)
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            showProject(currentIndex);
            updateArrows();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            showProject(currentIndex);
            updateArrows();
        }
    });

    // Load projects and initialize the carousel on page load
    const container = document.getElementById("container-projects");

    if (container) {
        fetchProjects()
            .then(projects => {
                loadProjectsIntoContainer(container, projects);
            })
            .catch(error => console.error('Error loading projects:', error));
    } else {
        console.error('Container not found');
    }
});