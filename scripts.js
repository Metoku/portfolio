const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1.",
    image: "assets/project1.jpg",
    video: "https://www.youtube.com/watch?v=example1",
    category: "Game Development",
  },
  {
    title: "Project 2",
    description: "Description of Project 2.",
    image: "assets/project2.jpg",
    video: "https://www.youtube.com/watch?v=example2",
    category: "Game Development",
  },
  {
    title: "Project 3",
    description: "Description of Project 3.",
    image: "assets/project3.jpg",
    video: "https://www.youtube.com/watch?v=example3",
    category: "Programming",
  },
  // Add more projects as needed
];

const gallery = document.getElementById("project-gallery");
const filterSelect = document.getElementById("filter-select");
const sortSelect = document.getElementById("sort-select");

// Function to filter projects by category
function filterProjects(category) {
  const filteredProjects = projects.filter(
    (project) => project.category === category,
  );
  displayProjects(filteredProjects);
}

// Function to sort projects alphabetically
function sortProjects() {
  const sortedProjects = projects.sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  displayProjects(sortedProjects);
}

// Function to display projects in the gallery
function displayProjects(projects) {
  gallery.innerHTML = "";
  loadingSpinner(true); // Show spinner
  setTimeout(() => {
    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.className = "col-md-4 project-item";
      projectItem.innerHTML = `
                <div class="card">
                    <a href="${project.image}" data-toggle="lightbox" data-title="${project.title}">
                        <img src="${project.image}" class="card-img-top project-img" alt="${project.title}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.video}" target="_blank" class="btn btn-primary">Watch Video</a>
                    </div>
                </div>
            `;
      gallery.appendChild(projectItem);
    });
    loadingSpinner(false); // Hide spinner
  }, 500); // Simulate loading time
}

function loadingSpinner(show) {
  const spinner = document.getElementById("loading-spinner");
  spinner.style.display = show ? "block" : "none";
}

// Event listeners for filtering and sorting
filterSelect.addEventListener("change", () => {
  const selectedCategory = filterSelect.value;
  filterProjects(selectedCategory);
});

sortSelect.addEventListener("change", () => {
  sortProjects();
});

// Initialize the gallery with all projects
displayProjects(projects);
