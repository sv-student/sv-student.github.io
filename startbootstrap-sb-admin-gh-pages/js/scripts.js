/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
window.addEventListener("DOMContentLoaded", function fetchCatImageXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cataas.com/cat", true); // Fetch a random cat image
    xhr.responseType = "blob"; // Ensure the response is an image

    xhr.onload = function () {
        if (xhr.status === 200) {
            const imgURL = URL.createObjectURL(xhr.response);
            const catDiv = document.getElementById("cat");
            catDiv.innerHTML = `<img src="${imgURL}" alt="Random Cat Image" />`;
        } else {
            console.error("Failed to load cat image.");
        }
    };

    xhr.send();
});
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
