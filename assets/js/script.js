


const aboutMeEl = document.querySelector("#aboutme-id");
const aboutMeAnchorEl = document.querySelector("#aboutme-anchor");

const workEl = document.querySelector("#work-id");
const workAnchorEl = document.querySelector("#work-anchor");

const contactEl = document.querySelector("#contact-id");
const contactAnchorEl = document.querySelector("#contact-anchor")


// once clicked the anchor - smooth scroll to each section
function scrollToAbout(event){
    //checking the element I am clicking
    console.log(event.target)
    aboutMeEl.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToWork(event){
    console.log(event.target);
    workEl.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToContact(event){
    console.log(event.target);
    contactEl.scrollIntoView({
        behavior: "smooth"
    });
}

aboutMeAnchorEl.addEventListener("mousedown", scrollToAbout);
workAnchorEl.addEventListener("mousedown", scrollToWork);
contactAnchorEl.addEventListener("mousedown", scrollToContact);


