document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("skill-nodes-overlay");

  const skills = [
    { name: "REACT", top: 16, left: 50.5, dir: "top" },
    { name: "NODE.JS", top: 18, left: 71, dir: "bottom" },
    { name: "JAVASCRIPT", top: 29, left: 48, dir: "left" },
    { name: "TYPESCRIPT", top: 36, left: 53.5, dir: "top-right" },
    { name: "PYTHON", top: 45, left: 38.5, dir: "right" },
    { name: "BOOTSTRAP", top: 64, left: 66, dir: "top" },
    { name: "GIT", top: 63, left: 58, dir: "bottom" },
    { name: "CSS / UI", top: 22, left: 28, dir: "bottom" },
    { name: "FIGMA", top: 58, left: 30.5, dir: "bottom" },
    { name: "HTML", top: 77, left: 31.2, dir: "bottom" },
    { name: "SQL", top: 84.5, left: 75, dir: "bottom" },
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
