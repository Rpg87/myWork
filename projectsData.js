'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const containerProjects = document.getElementById("container-projects");
    const containerCarousel = document.getElementById("carousel");

    // Function to load and display projects
    function loadProjects() {
        // Load JSON data
        fetch('portfolio.json')
            .then(response => response.json())
            .then(data => {
                // Generate HTML content for projects and carousel
                data.forEach(project => {
                    const projectDiv = createProjectElement(project);
                    containerProjects.appendChild(projectDiv);

                    const carouselItem = createCarouselItem(project);
                    containerCarousel.appendChild(carouselItem);
                });

                // Initialize the carousel after projects are loaded
                initCarousel();
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

    // Function to create the HTML element of a carousel item
    function createCarouselItem(project) {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        // Add image to carousel item
        const carouselImg = document.createElement("img");
        carouselImg.src = project.cover;
        carouselImg.classList.add("carousel-image");
        carouselItem.appendChild(carouselImg);

        // Add title to carousel item
        const titleH3 = document.createElement("h3");
        titleH3.textContent = project.title;
        titleH3.classList.add("carousel-title");
        carouselItem.appendChild(titleH3);

        // Add description to carousel item
        const descriptionP = document.createElement("p");
        descriptionP.textContent = project.description;
        descriptionP.classList.add("carousel-description");
        carouselItem.appendChild(descriptionP);

        // Add demo link to carousel item
        const urlA = createLink("DEMO", project.url);
        urlA.classList.add("carousel-demo-link");
        carouselItem.appendChild(urlA);

        // Add code link to carousel item
        const codeA = createLink("CODE", project.code);
        codeA.classList.add("carousel-code-link");
        carouselItem.appendChild(codeA);

        return carouselItem;
    }

    // Function to create a link with customized text
    function createLink(text, url) {
        const link = document.createElement("a");
        link.textContent = text;
        link.href = url;
        link.target = "_blank";
        return link;
    }

    // Function to initialize the carousel
    function initCarousel() {

        $('#carousel').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="arrow-button" id="prev-button">prev</button>',
            nextArrow: '<button class="arrow-button" id="next-button">next</button>',
        });
    }

    loadProjects();
});
