// IDs
let sortById = document.getElementById("sortById");
let sortByFirstName = document.getElementById("sortByFirstName");
let sortByLastName = document.getElementById("sortByLastName");
let sortByEmail = document.getElementById("sortByEmail");
let sortByHeight = document.getElementById("sortByHeight");
let sortByAge = document.getElementById("sortByAge");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let tableBody = document.getElementById('tableBody');

let currentPage = 1;
let itemsPerPage;
let originalData = [];
let currentSortColumn;
let isAscending = true;

export function createDataTable(data) {
    originalData = [...data];
    displayData(originalData);
}

// Sorting Function 

function sortByColumn(column) {
    
    if (currentSortColumn === column) {
        isAscending = !isAscending;
    } else {
        currentSortColumn = column;
        isAscending = true;
    }

    const sortedData = [...originalData].sort((a, b) => {
        let A = a[column];
        let B = b[column];

        if (['Id', 'Age'].includes(column)) {
            A = Number(A);
            B = Number(B);
        }

        return isAscending ? (A > B ? 1 : -1) : (A > B ? -1 : 1);
    });

    displayData(sortedData);
}

// Sorting Buttons

sortById.addEventListener('click', () => {
    sortByColumn('Id')
});

sortByFirstName.addEventListener('click', () => {
    sortByColumn('FirstName')
});

sortByLastName.addEventListener('click', () => {
    sortByColumn('LastName')
});

sortByEmail.addEventListener('click', () => {
    sortByColumn('Email')
});

sortByHeight.addEventListener('click', () => {
    sortByColumn('Height')
});

sortByAge.addEventListener('click', () => {
    sortByColumn('Age')
});

// Display Function

function displayData(data) {

    itemsPerPage = 10;
    tableBody.innerHTML = '';

    const startOfSection = (currentPage - 1) * itemsPerPage;
    const endOfSection = startOfSection + itemsPerPage;
    const pageData = data.slice(startOfSection, endOfSection);

    pageData.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border';

        ['Id', 'FirstName', 'LastName', 'Email', 'Height', 'Age'].forEach(key => {
            const dataBlock = document.createElement('td');
            dataBlock.className = 'px-5 py-3';
            dataBlock.textContent = item[key];
            row.appendChild(dataBlock);
        });

        tableBody.appendChild(row);
    });


}

// Next and Previous Buttons
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayData(originalData);
    }
});

nextButton.addEventListener('click', () => {
    let totalPages = 10;
    if (currentPage < totalPages) {
        currentPage++;
        displayData(originalData);
    }
});



