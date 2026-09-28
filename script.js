const scrollDown = document.getElementById("scrollDown");
const problemSection = document.getElementById("problema");

const sections = [
    "problema",
    "como-funciona",
    "solucao",
    "beneficios",
    "faq",
    "contato",
    "footer"
];

let currentSection = 0;

function updateArrow() {

    sections.forEach((sectionId, index) => {

        const section = document.getElementById(sectionId);

        if (window.scrollY >= section.offsetTop - 200) {
            currentSection = index;
        }

    });

   if (
    window.scrollY >= problemSection.offsetTop - 200 &&
    currentSection < sections.length - 1
) {
    scrollDown.style.display = "flex";
} else {
    scrollDown.style.display = "none";
}

    if (currentSection < sections.length - 1) {
        scrollDown.href = "#" + sections[currentSection + 1];
    }
}

window.addEventListener("scroll", updateArrow);

updateArrow();