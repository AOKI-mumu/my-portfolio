const projects = [
  {
    title: "aitryon.art Product Experience Redesign",
    displayTitle: "aitryon.art",
    year: "2026",
    type: "Product / UXUI",
    detailUrl: "./case-study-aitryon.html",
    image: "./assets/aitryon-after.png",
    summary: "AI SaaS product experience reframed from a vertical try-on tool into a broader image and video creation platform.",
    meta: {
      role: "Lead Product Designer",
      team: "Founders, CTO, developers",
      duration: "2024-2025",
      tools: "Figma, Notion, Miro"
    },
    intro: "A focused redesign that turns complex team, coach, and athlete workflows into a calmer product experience.",
    context: "The platform had validated demand, but the interface had grown dense as new features were added quickly. The redesign clarified navigation, simplified repeated workflows, and established reusable UI patterns.",
    challenge: "The main challenge was making a powerful tool feel approachable without flattening the professional depth that coaches and athletes relied on every day.",
    process: [
      "Audited existing user flows and mapped repeated friction points.",
      "Grouped features around coach, athlete, and team decision moments.",
      "Built mid-fidelity prototypes to test navigation and dashboard hierarchy.",
      "Translated approved patterns into a more systematic visual language."
    ],
    solution: [
      "Reworked dashboard hierarchy around active tasks and recent training signals.",
      "Reduced competing card styles and clarified empty, loading, and success states.",
      "Created reusable components for lists, media modules, metrics, and profile areas.",
      "Prepared a scalable direction for future feature releases."
    ],
    outcomes: [
      ["+98%", "engagement increase after the redesign direction"],
      ["56%", "longer session duration"],
      ["Higher adoption", "clearer onboarding for a broader user base"],
      ["More confidence", "stakeholders could plan new features from stable patterns"]
    ]
  },
  {
    title: "Brand Launch System",
    displayTitle: "Brand Launch",
    year: "2025",
    type: "web / identity",
    detailUrl: "./case-study-aitryon.html",
    image: "./assets/pod1um-case-study.png",
    summary: "A launch website and modular identity kit for a new service brand entering a crowded market.",
    meta: {
      role: "Visual and Web Designer",
      team: "Founder, copywriter",
      duration: "6 weeks",
      tools: "Figma, Webflow, After Effects"
    },
    intro: "A launch system built to make a young brand feel immediately specific, credible, and ready to sell.",
    context: "The brand needed a public presence that could explain the offer, show taste, and support rapid campaign changes after launch.",
    challenge: "The site had to feel premium without becoming vague, and flexible without looking like a generic template.",
    process: [
      "Defined visual territory, content hierarchy, and page goals.",
      "Designed reusable page sections for offer, proof, process, and contact.",
      "Created launch-ready motion rules for reveals and micro-interactions.",
      "Prepared responsive layouts for mobile-first traffic."
    ],
    solution: [
      "Built a strong first viewport with clear positioning and immediate proof.",
      "Created a compact design system for typography, buttons, media blocks, and forms.",
      "Structured sections around sales questions rather than decorative storytelling.",
      "Delivered a setup the founder could maintain after launch."
    ],
    outcomes: [
      ["Fast launch", "site and brand assets ready for campaign use"],
      ["Clearer offer", "visitors could understand the service in the first screen"],
      ["Reusable system", "new pages could be assembled without redesigning"],
      ["Better handoff", "content and design rules documented for future updates"]
    ]
  },
  {
    title: "AI Creative Tool",
    displayTitle: "AI Creative Tool",
    year: "2024",
    type: "product / prototype",
    detailUrl: "./case-study-aitryon.html",
    image: "./assets/pod1um-case-study.png",
    summary: "An experimental workflow tool for turning rough creative ideas into structured image and video prompts.",
    meta: {
      role: "Product Designer",
      team: "Solo prototype",
      duration: "3 weeks",
      tools: "Figma, HTML, JavaScript"
    },
    intro: "A prototype for creative operators who need speed, structure, and repeatability when working with AI media tools.",
    context: "AI image and video workflows often become scattered across documents, chat logs, and screenshots. This prototype tested a more organized way to move from idea to production prompt.",
    challenge: "The product needed to preserve creative looseness while adding enough structure to make outputs consistent.",
    process: [
      "Mapped the messy path from idea, reference, prompt, image, critique, and iteration.",
      "Designed a workspace around scenes, style anchors, and reusable prompt blocks.",
      "Tested variants for compact editing and side-by-side review.",
      "Built a clickable prototype to validate the workflow rhythm."
    ],
    solution: [
      "Separated creative intent, visual references, and generation parameters.",
      "Added prompt memory so strong phrasing could be reused across scenes.",
      "Created a review surface for comparing outputs and recording decisions.",
      "Kept the interface dense enough for work, but calm enough for long sessions."
    ],
    outcomes: [
      ["Less drift", "visual direction stayed more consistent across iterations"],
      ["Faster prompts", "reusable blocks reduced repeated writing"],
      ["Better critique", "decisions could be captured beside each output"],
      ["Reusable concept", "prototype can expand into video storyboarding"]
    ]
  }
];

const loader = document.querySelector("#loader");
const loaderParticles = document.querySelector("#loaderParticles");
const app = document.querySelector("#app");
const loaderCount = document.querySelector("#loaderCount");
const projectList = document.querySelector("#projectList");
const preview = document.querySelector("#preview");
const previewImage = document.querySelector("#previewImage");
const previewLink = document.querySelector("#previewLink");
const previewMeta = document.querySelector("#previewMeta");
const previewTitle = document.querySelector("#previewTitle");
const previewText = document.querySelector("#previewText");

let activeIndex = 0;
let count = 0;

document.body.classList.add("is-loading");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const particleScene = createLoaderParticleScene(loaderParticles, prefersReducedMotion);

projects.forEach((project, index) => {
  const item = document.createElement("button");
  item.className = "project-item";
  item.type = "button";
  item.innerHTML = `
    <span class="project-year">${project.year}</span>
    <span class="project-title">${project.displayTitle || project.title}</span>
    <span class="project-type">${project.type}</span>
  `;
  item.addEventListener("mouseenter", () => setActiveProject(index));
  item.addEventListener("focus", () => setActiveProject(index));
  item.addEventListener("click", () => setActiveProject(index));
  projectList.appendChild(item);
});

function setActiveProject(index) {
  if (index === activeIndex) {
    syncActiveButton();
    return;
  }
  activeIndex = index;
  const project = projects[index];

  preview.classList.add("is-changing");
  window.setTimeout(() => {
    previewImage.src = project.image;
    previewImage.alt = `${project.title} preview`;
    previewLink.href = project.detailUrl;
    previewLink.setAttribute("aria-label", `View ${project.title} case study`);
    previewMeta.textContent = `${project.year} / ${project.type}`;
    previewTitle.textContent = project.title;
    previewText.textContent = project.summary;
    syncActiveButton();
    preview.classList.remove("is-changing");
  }, 140);
}

function syncActiveButton() {
  [...projectList.children].forEach((item, index) => {
    item.classList.toggle("is-active", index === activeIndex);
  });
}

syncActiveButton();
previewLink.href = projects[activeIndex].detailUrl;
previewLink.setAttribute("aria-label", `View ${projects[activeIndex].title} case study`);
window.scrollTo({ top: 0 });

const timer = window.setInterval(() => {
  count += 5;
  const progress = Math.min(count, 100);
  loaderCount.textContent = String(progress).padStart(2, "0");
  loader.style.setProperty("--load-progress", `${progress}%`);
  if (progress >= 100) {
    window.clearInterval(timer);
    loader.classList.add("is-hidden");
    app.classList.add("is-ready");
    document.body.classList.remove("is-loading");
    window.setTimeout(() => particleScene.stop(), 900);
  }
}, 55);

function createLoaderParticleScene(canvas, isReducedMotion) {
  if (!canvas) {
    return { stop() {} };
  }

  const context = canvas.getContext("2d");
  const particles = [];
  let width = 0;
  let height = 0;
  let centerX = 0;
  let centerY = 0;
  let animationFrame = 0;
  let running = !isReducedMotion;
  let pixelRatio = 1;

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function addParticle(x, y, z, type, angle = 0) {
    particles.push({
      x,
      y,
      z,
      baseZ: z,
      type,
      angle,
      size: type === "field" ? randomRange(0.82, 1.24) : randomRange(0.9, 1.65),
      alpha: type === "field" ? randomRange(0.26, 0.46) : randomRange(0.12, 0.22),
      driftX: randomRange(-0.08, 0.08),
      driftY: randomRange(-0.04, 0.08),
      speed: type === "field" ? randomRange(0.0015, 0.0035) : randomRange(0.001, 0.0026),
      phase: randomRange(0, Math.PI * 2)
    });
  }

  function seedParticles() {
    particles.length = 0;
    const slices = width < 700 ? 34 : 58;
    const pointsPerSlice = width < 700 ? 34 : 64;

    for (let slice = 0; slice < slices; slice += 1) {
      const z = slice / (slices - 1);
      const twist = slice * 0.045;
      for (let point = 0; point < pointsPerSlice; point += 1) {
        const angle = (point / pointsPerSlice) * Math.PI * 2 + twist;

        if (Math.random() < 0.16) {
          continue;
        }

        addParticle(randomRange(-0.004, 0.004), randomRange(-0.004, 0.004), z, "field", angle);
      }
    }

    const edgeCount = width < 700 ? 4 : 10;
    for (let index = 0; index < edgeCount; index += 1) {
      addParticle(
        randomRange(-width * 0.7, width * 0.7),
        randomRange(-height * 0.48, height * 0.5),
        randomRange(0.15, 0.95),
        "edge"
      );
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    centerX = width * 0.5;
    centerY = height * 0.48;
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    seedParticles();
    draw(0);
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);

    const progress = Math.min(count / 100, 1);
    const globalPush = isReducedMotion ? 0 : progress * 0.06 + Math.sin(time * 0.00034) * 0.018;
    const vanishingX = centerX - width * 0.2;
    const vanishingY = centerY - height * 0.2;

    particles.forEach((particle) => {
      if (running) {
        particle.z -= particle.speed;
        if (particle.z < 0) {
          particle.z = 1;
        }
      }

      let depth = particle.z - globalPush;
      if (depth < 0) {
        depth += 1;
      }

      const wave = Math.sin(time * 0.00045 + particle.phase);
      let x;
      let y;
      let radius;
      let alpha;

      if (particle.type === "field") {
        const tunnelDepth = Math.pow(depth, 1.42);
        const ringCenterX = vanishingX + (centerX - vanishingX) * Math.min(1, depth * 1.08);
        const ringCenterY = vanishingY + (centerY - height * 0.04 - vanishingY) * Math.min(1, depth * 0.98);
        const radiusX = width * (0.035 + tunnelDepth * 0.78);
        const radiusY = height * (0.02 + tunnelDepth * 0.4);
        const pinch = 1 - Math.max(0, Math.cos(particle.angle)) * 0.16;
        x = ringCenterX + Math.cos(particle.angle) * radiusX * pinch + particle.x * width + wave * 0.8;
        y = ringCenterY + Math.sin(particle.angle) * radiusY + particle.y * height + wave * 0.55;
        radius = particle.size * (0.34 + depth * 0.72);
        alpha = Math.min(0.34, particle.alpha * (0.42 + depth * 0.72));
      } else {
        x = centerX + particle.x + wave * particle.driftX * 8;
        y = centerY + particle.y + wave * particle.driftY * 8;
        radius = particle.size * (0.5 + particle.z * 0.45);
        alpha = particle.alpha * 0.74;
      }

      if (x < -20 || x > width + 20 || y < -20 || y > height + 20) {
        return;
      }

      context.beginPath();
      context.arc(x, y, Math.max(particle.type === "field" ? 0.32 : 0.42, radius), 0, Math.PI * 2);
      context.fillStyle = `rgba(35, 37, 38, ${alpha})`;
      context.fill();
    });

    if (running) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  }

  resize();
  window.addEventListener("resize", resize);

  if (running) {
    animationFrame = window.requestAnimationFrame(draw);
  }

  return {
    stop() {
      running = false;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    }
  };
}
