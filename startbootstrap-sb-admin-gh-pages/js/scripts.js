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

document.getElementById("ageRangeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const minAge = parseInt(document.getElementById("minAge").value, 10);
    const maxAge = parseInt(document.getElementById("maxAge").value, 10);
  
    if (isNaN(minAge) || isNaN(maxAge)) {
        alert("Please enter valid age values.");
        return;
    }
  
    const filteredData = tableData.filter(row => row.age >= minAge && row.age <= maxAge);
    const entryCount = filteredData.length;
  
    if (entryCount === 0) {
        document.getElementById("averageSalary").textContent = "No matching data found.";
        return;
    }
  
    const totalSalary = filteredData.reduce((sum, row) => {
        return sum + parseFloat(row.salary.replace(/[$,]/g, ""));
    }, 0);
  
    const averageSalary = (totalSalary / entryCount).toFixed(2);
  
    document.getElementById("averageSalary").textContent = 
        `Number of Entries: ${entryCount}, Average Salary: $${averageSalary}`;
  });


  document.getElementById("employeeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const randomPerson = Math.Random(tableData);
    
});