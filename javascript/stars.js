document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("skill-nodes-overlay");

  const skills = [
    { name: "REACT", top: 17, left: 47, dir: "top" },
    { name: "NODE.JS", top: 16, left: 68, dir: "bottom" },
    { name: "SQL", top: 29, left: 44, dir: "left" },
    { name: "TYPESCRIPT", top: 37, left: 49, dir: "top-right" },
    { name: "GIT", top: 45, left: 37, dir: "right" },
    { name: "BOOTSTRAP", top: 64, left: 64, dir: "top" },
    { name: "PYTHON", top: 55, left: 47, dir: "bottom" },
    { name: "CSS / UI", top: 21, left: 22, dir: "bottom" },
    { name: "FIGMA", top: 56, left: 24, dir: "bottom" },
    { name: "HTML", top: 75, left: 26, dir: "bottom" },
    { name: "JAVASCRIPT", top: 83, left: 73, dir: "bottom" },
  ];

  skills.forEach((skill) => {
    const star = document.createElement("div");

    star.className = `skill-star ${skill.dir}`;

    star.style.top = `${skill.top}%`;
    star.style.left = `${skill.left}%`;
    star.setAttribute("data-skill", skill.name);

    const duration = Math.random() * 3 + 2;
    star.style.animation = `twinkle ${duration}s infinite ease-in-out`;

    overlay.appendChild(star);
  });
});
