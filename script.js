const blogs = [
    {
    id: 1,
    title: "My First Steps into Web Development",
    date: "April 1, 2026",
    category: "Technology",
    tags: ["web-dev",],
    excerpt: "How I built my very first responsive website as a CS student in Faisalabad.",
    content: `
        <h1>My First Steps into Web Development</h1>
        <p class="date">April 1, 2026 • Technology</p>
        
        <p>It all started with a simple HTML file during a boring lecture at university. While everyone else was taking notes on theory, I was obsessed with making a "Hello World" text turn blue and move to the center of my screen.</p>

        <h3>The Spark</h3>
        <p>Living in Faisalabad, I realized that many local businesses didn't have a digital presence. I decided that my first project shouldn't just be a tutorial clone—it should be something real. I spent 48 hours straight (fueled by plenty of Chai) learning how CSS Flexbox actually works.</p>

        <h3>The Tech Stack</h3>
        <p>For this first project, I kept it lean and mean:</p>
        <ul>
            <li><strong>HTML5:</strong> Semantic tags for better SEO.</li>
            <li><strong>CSS3:</strong> Custom properties and media queries for responsiveness.</li>
            <li><strong>JavaScript:</strong> Just a tiny bit for a mobile toggle menu.</li>
        </ul>

        <blockquote>
            "The best way to learn is to build something that breaks, and then figure out why."
        </blockquote>

        <h3>Major Challenges</h3>
        <p>The hardest part wasn't the code; it was making the site look good on my phone. I learned the 'Mobile First' approach the hard way after having to rewrite my CSS three times!</p>

        <h3>Final Thoughts</h3>
        <p>Two days later, I had a fully responsive site deployed. Lessons learned: Start small, don't get stuck in 'tutorial hell', and just ship it! If you're a student like me, stop waiting for the perfect idea and just start coding.</p>
    `
},
    {
    id: 2,
    title: "Balancing University Life and Side Projects",
    date: "March 20, 2026",
    category: "Lifestyle",
    tags: ["student-life"],
    excerpt: "How I manage 18 credit hours, cricket, and still ship side projects every month.",
    content: `
        <h1>Balancing University Life and Side Projects</h1>
        <p class="date">March 20, 2026 • Lifestyle</p>

        <p>Being a Computer Science student is a full-time job. Between 18 credit hours of lectures, lab assignments, and the occasional cricket match with friends, finding time to build side projects can feel impossible. But I believe "shipping" code is just as important as your GPA.</p>

        <h3>The 'Maghrib to Isha' Rule</h3>
        <p>My secret isn't working 10 hours a day. It's working 2 focused hours every single night. In Faisalabad, once the sun sets and Maghrib prayer is over, the city settles down. That is my deep-work window.</p>
        
        <ul>
            <li><strong>No Phone:</strong> My phone goes in the other room.</li>
            <li><strong>Single Task:</strong> I don't "code"—I solve one specific bug or build one specific component.</li>
            <li><strong>The Notion Dashboard:</strong> I keep a simple 'Brain Dump' list so I don't waste time wondering what to work on.</li>
        </ul>

        <h3>Maintaining the Social Life</h3>
        <p>You can't code 24/7 without burning out. I make sure to keep my Friday evenings strictly for family and cricket. It recharges my brain so I can tackle complex algorithms on Monday morning.</p>

        <blockquote>
            "Productivity isn't about doing more things; it's about doing the right things consistently."
        </blockquote>

        <h3>Tools I Use</h3>
        <p>To keep my life from falling apart, I rely on a very small set of tools:</p>
        <ul>
            <li><strong>Notion:</strong> For my university timetable and project roadmap.</li>
            <li><strong>Google Calendar:</strong> To block out study sessions.</li>
            <li><strong>VS Code:</strong> Obviously!</li>
        </ul>

        <h3>Advice for Fellow Students</h3>
        <p>Don't wait for the semester break to start your portfolio. Build 15 minutes a day if you have to. Those small commits add up to a career-ready GitHub profile by the time you graduate.</p>
    `
},
    {
    id: 3,
    title: "Why Every Student Should Learn AI Basics in 2026",
    date: "April 5, 2026",
    category: "Technology",
    tags: ["ai"],
    excerpt: "AI is no longer a buzzword. It's the new electricity — students must start now.",
    content: `
        <h1>Why Every Student Should Learn AI Basics in 2026</h1>
        <p class="date">April 5, 2026 • Technology</p>

        <p>We are living in an era where AI is no longer a "future" concept—it's the foundation of modern infrastructure. Just as previous generations had to learn how to use a computer, our generation must learn how to collaborate with AI agents to stay relevant.</p>

        <h3>Beyond the Chatbot</h3>
        <p>Many students make the mistake of thinking AI is just ChatGPT. In 2026, the landscape has shifted toward <strong>AI Agents</strong>—programs that don't just talk, but actually perform tasks like booking appointments, writing tests, or analyzing large datasets automatically.</p>

        <blockquote>
            "AI won't replace you, but a person using AI will."
        </blockquote>

        <h3>Where to Start?</h3>
        <p>You don't need a PhD in Mathematics to start. Here is my recommended roadmap for any student in Faisalabad or beyond:</p>
        <ul>
            <li><strong>Master Prompt Engineering:</strong> Learn how to give precise instructions to get high-quality outputs.</li>
            <li><strong>Understand the Ethics:</strong> Learn about bias and data privacy so you can use these tools responsibly.</li>
            <li><strong>Build a 'Wrapper':</strong> Try using APIs to connect an AI model to a simple website (like this blog!).</li>
        </ul>

        <h3>The "New Electricity"</h3>
        <p>Think of AI as the new electricity. It will power every industry, from the textile mills here in Faisalabad to the global tech hubs in Silicon Valley. If you can understand the basics now, you'll be the one building the systems of tomorrow.</p>

        <h3>My Personal AI Workflow</h3>
        <p>I use AI every day to help me debug my JavaScript code and summarize long academic papers. It saves me roughly 10 hours a week—time I can spend on cricket or working on my next side project!</p>

        <p>The tools are free, and the tutorials are everywhere. Don't wait for your university to add it to the curriculum—start building today.</p>
    `
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