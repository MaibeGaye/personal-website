function renderFromUser(user) {
    document.querySelector("#person-picture").src = user.picture.large; 
    document.querySelector("#person-fullname").textContent = user.name.first + " " + user.name.last;
    document.querySelector("#person-firstname").textContent = user.name.first;
    document.querySelector("#person-job").textContent = user.position[user.gender];
    document.querySelector("#person-position").textContent = user.position[user.gender];
    document.querySelector("#person-company").textContent = user.company ? " chez " + user.company : "en recherche d'emploi";
    document.querySelector("#person-city").textContent = user.location.city + ", " + user.location.country;
    document.querySelector("#person-speciality").textContent = user.speciality;
    document.querySelector("#person-speciality").textContent = user.speciality;
    document.querySelector("#person-email").href = `mailto: + ${user.email}`;
}