const blogs = [
    {
        id: 1,
        title: "My First Steps into Web Development",
        date: "April 1, 2026",
        category: "Technology",
        tags: ["web-dev"],
        excerpt: "How I built my very first responsive website as a CS student in Faisalabad.",
        content: `<h1>My First Steps into Web Development</h1>
                  <p class="date">April 1, 2026 • Technology</p>
                  <p>It all started with a simple HTML file during a boring lecture. Two days later, I had a fully responsive site deployed.</p>
                  <p>Lessons learned: Start small, focus on responsive design, and just ship it!</p>`
    },
    {
        id: 2,
        title: "Balancing University Life and Side Projects",
        date: "March 20, 2026",
        category: "Lifestyle",
        tags: ["student-life"],
        excerpt: "How I manage 18 credit hours, cricket, and still ship side projects every month.",
        content: `<h1>Balancing University Life and Side Projects</h1>
                  <p class="date">March 20, 2026 • Lifestyle</p>
                  <p>University life is intense. Here's my system: 2 focused hours every night after Maghrib and a simple Notion dashboard.</p>`
    },
    {
        id: 3,
        title: "Why Every Student Should Learn AI Basics in 2026",
        date: "April 5, 2026",
        category: "Technology",
        tags: ["ai"],
        excerpt: "AI is no longer a buzzword. It's the new electricity — students must start now.",
        content: `<h1>Why Every Student Should Learn AI Basics in 2026</h1>
                  <p class="date">April 5, 2026 • Technology</p>
                  <p>The tools are free and tutorials are everywhere. Start with ChatGPT and move to building your own agents.</p>`
    },
    
];

// Render blogs function
function renderBlogs(blogsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (blogsToShow.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#94a3b8;">No blogs found. Try different keywords.</p>`;
        return;
    }

    blogsToShow.forEach(blog => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
            <div class="blog-content">
                <p style="color:#64748b;font-size:0.9rem;">${blog.date} • ${blog.category}</p>
                <h3>${blog.title}</h3>
                <p class="excerpt">${blog.excerpt}</p>
                <div class="tags">
                    ${blog.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
                </div>
                 <div class="see-full"  onclick="event.stopImmediatePropagation(); openBlogModal(${blog.id})">
                    See Full Story →
                </div>
            </div>
        `;
        card.onclick = () => openBlogModal(blog.id);
        container.appendChild(card);
    });
}

window.openBlogModal = function(id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;
    const modal = document.getElementById("blog-modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = blog.content;
    modal.style.display = "flex";
};

function setupModal() {
    const modal = document.getElementById("blog-modal");
    const closeBtn = document.getElementById("modal-close");
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
}

function setupSearch() {
    const globalSearch = document.getElementById("global-search");
    const categorySearch = document.getElementById("category-search");
    const dropdown = document.getElementById("search-results");

    function handleSearch(input, isGlobal = false) {
        input.addEventListener("input", () => {
            const term = input.value.toLowerCase().trim();
            if (term.length < 1) {
                if (dropdown) dropdown.style.display = "none";
                return;
            }

            const filtered = blogs.filter(b =>
                b.title.toLowerCase().includes(term) ||
                b.excerpt.toLowerCase().includes(term) ||
                b.tags.some(t => t.toLowerCase().includes(term))
            );

            if (isGlobal && dropdown) {
                let html = "";
                filtered.forEach(b => html += `<div onclick="openBlogModal(${b.id}); document.getElementById('global-search').value='';">${b.title}</div>`);
                dropdown.innerHTML = html || `<div style="padding:16px;opacity:0.6;">No results found</div>`;
                dropdown.style.display = "block";
            } else if (!isGlobal) {
                renderBlogs(filtered, "categories-grid");
            }
        });
    }

    if (globalSearch) handleSearch(globalSearch, true);
    if (categorySearch) handleSearch(categorySearch, false);
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Message Sent ✓";
        submitBtn.style.background = "#22c55e";
        submitBtn.disabled = true;

        setTimeout(() => {
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = "";
            submitBtn.disabled = false;
        }, 2000);
    });
}

function loadTagsPage() {
    const cloud = document.getElementById("tags-cloud");
    if (!cloud) return;

    const allTags = [...new Set(blogs.flatMap(b => b.tags))];
    cloud.innerHTML = allTags.map(tag => `
        <span class="tag-chip" onclick="filterByTag('${tag}')">#${tag}</span>
    `).join("");
}

window.filterByTag = function(tag) {
    const filtered = blogs.filter(b => b.tags.includes(tag));
    renderBlogs(filtered, "tags-grid");
};

function init() {
    setupModal();
    setupSearch();
    setupContactForm();

    // Home page
    if (document.getElementById("featured-grid")) {
        renderBlogs(blogs, "featured-grid");
    }

    // Categories page - Show ALL blogs by default
    if (document.getElementById("categories-grid")) {
        renderBlogs(blogs, "categories-grid");   // This ensures all blogs appear immediately
    }

    // Tags page
   // Tags page
if (document.getElementById("tags-cloud")) {
    loadTagsPage();
}

    // Burger menu
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (burger && mobileMenu) {
        burger.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    }
}

window.onload = init;