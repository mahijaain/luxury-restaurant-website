const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();

  const email = form.querySelector("input[type='email']").value.trim();

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter valid email");
    return;
  }

  alert("Reservation Submitted Successfully");

  form.reset();

});
