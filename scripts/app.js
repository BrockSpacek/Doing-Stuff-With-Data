import { createDataTable } from '../scripts/mydatatable.js';

document.addEventListener('DOMContentLoaded', function() {
   
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            createDataTable(data.People);
        })
        .catch(error => {
            console.error('Error loading data:', error);
           
            const tableContainer = document.getElementById('tableContainer');
            tableContainer.innerText = "Error: Data Not Found"
        });
});