const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.getElementById("mode");

light.addEventListener("click", ()=> {
    body.classList.toggle("light");
    body.classList.toggle("dark");
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");
})

dark.addEventListener("click", ()=> {
    body.classList.toggle("light");
    body.classList.toggle("dark");
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");
})

const accordionHeaders = document.querySelectorAll(".accordion_header");
accordionHeaders.forEach(header => {
    header.addEventListener('click', () =>{
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");
        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active")
    })
})