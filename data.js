const data = [
    {
        "id": 1,
        "name": "Over 30",
        "subDivisions": [
            {
                "name": "North",
                "leagues": ["1 North", "2 North", "3 North"]
            },
            {
                "name": "South",
                "leagues": ["1 South", "2 South", "3 South"]
            }
        ]
    },
    {
        "id": 2,
        "name": "Over 40",
        "subDivisions": [
            {
                "name": "North",
                "leagues": ["1 North", "2 North", "3 North"]
            },
            {
                "name": "South",
                "leagues": ["1 South", "2 South", "3 South"]
            }
        ]
    },
    {
        "id": 3,
        "name": "Over 48",
        "subDivisions": [
            {
                "name": "North",
                "leagues": ["1 North", "2 North", "3 North", "4 North", "5 North"]
            },
            {
                "name": "South",
                "leagues": ["1 South", "2 South", "3 South", "4 South", "5 South"]
            }
        ]
    },
    {
        "id": 4,
        "name": "Over 55",
        "subDivisions": [
            {
                "name": "North",
                "leagues": ["1 North", "2 North", "3 North"]
            },
            {
                "name": "South",
                "leagues": ["1 South", "2 South", "3 South"]
            }
        ]
    },
    {
        "id": 5,
        "name": "Over 62",
        "subDivisions": [
            {
                "name": "Central",
                "leagues": ["1 Central", "2 Central"]
            }
        ]
    },
    {
        "id": 6,
        "name": "Over 68",
        "subDivisions": [
            {
                "name": "Central",
                "leagues": ["1 Central", "2 Central"]
            }
        ]
    }
]

const allDivisions = document.querySelector('.testing-js');
const divisionsDropdown = document.querySelector('#division-select');

window.onload = function () {
    data.forEach(division => {
        const divisionContainer = document.createElement('div');
        divisionContainer.classList.add('division-container');
        const divisionHeaderContainer = document.createElement('div');
        divisionHeaderContainer.classList.add('division-header-container');
        const h4 = document.createElement('h4');
        h4.textContent = division.name;
        divisionHeaderContainer.appendChild(h4);
        divisionContainer.appendChild(divisionHeaderContainer);

        const divisionSidesContainer = document.createElement('div');
        divisionSidesContainer.classList.add('division-sides-container');

        divisionContainer.appendChild(divisionSidesContainer);

        division.subDivisions.forEach(sub => {
            const divisionSide = document.createElement('div');
            divisionSide.classList.add('division-side');

            const divisionsList = document.createElement('ul');
            divisionsList.classList.add('divisions-list');

            const leagues = sub.leagues;
            leagues.forEach(league => {
                const myDivision = document.createElement('li');
                myDivision.classList.add('my-division');

                const myDivisionLink = document.createElement('a');

                const divisionNameContainer = document.createElement('div');
                divisionNameContainer.classList.add('division-name-container');

                const divisionLogo = document.createElement('img');
                divisionLogo.src = 'images/blank_shield.png';

                const divisionName = document.createElement('div');
                divisionName.classList.add('division-name');

                const divisionNameMain = document.createElement('p');
                divisionNameMain.textContent = `${league}`;

                const divisionView = document.createElement('div');
                divisionView.classList.add('division-view');

                const divisionViewText = document.createElement('p');
                divisionViewText.classList.add('division-view-text');
                divisionViewText.textContent = 'View';

                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svg.setAttribute('viewBox', '0 0 16 16');
                svg.classList.add('division-view-chevron');

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('fill-rule', 'evenodd');
                path.setAttribute('d', 'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708');

                svg.appendChild(path);

                divisionView.appendChild(divisionViewText);
                divisionView.appendChild(svg);


                divisionName.appendChild(divisionNameMain);
                divisionNameContainer.appendChild(divisionLogo);
                divisionNameContainer.appendChild(divisionName);
                myDivisionLink.appendChild(divisionNameContainer);
                myDivisionLink.appendChild(divisionView);
                myDivision.appendChild(myDivisionLink);
                divisionsList.appendChild(myDivision);
            })

            divisionSide.appendChild(divisionsList);
            divisionSidesContainer.appendChild(divisionSide);
        })

        allDivisions.appendChild(divisionContainer);
    })
}

function displayDivisions(division) {
    allDivisions.innerHTML = '';

    const divisionContainer = document.createElement('div');
    divisionContainer.classList.add('division-container');
    const divisionHeaderContainer = document.createElement('div');
    divisionHeaderContainer.classList.add('division-header-container');
    const h4 = document.createElement('h4');
    h4.textContent = division[0].name;
    divisionHeaderContainer.appendChild(h4);
    divisionContainer.appendChild(divisionHeaderContainer);

    const divisionSidesContainer = document.createElement('div');
    divisionSidesContainer.classList.add('division-sides-container');

    divisionContainer.appendChild(divisionSidesContainer);

    division[0].subDivisions.forEach(sub => {
        const divisionSide = document.createElement('div');
        divisionSide.classList.add('division-side');

        const divisionsList = document.createElement('ul');
        divisionsList.classList.add('divisions-list');

        const leagues = sub.leagues;
        leagues.forEach(league => {
            const myDivision = document.createElement('li');
            myDivision.classList.add('my-division');

            const myDivisionLink = document.createElement('a');

            const divisionNameContainer = document.createElement('div');
            divisionNameContainer.classList.add('division-name-container');

            const divisionLogo = document.createElement('img');
            divisionLogo.src = 'images/blank_shield.png';

            const divisionName = document.createElement('div');
            divisionName.classList.add('division-name');

            const divisionNameMain = document.createElement('p');
            divisionNameMain.textContent = `${league}`;

            const divisionView = document.createElement('div');
            divisionView.classList.add('division-view');

            const divisionViewText = document.createElement('p');
            divisionViewText.classList.add('division-view-text');
            divisionViewText.textContent = 'View';

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.classList.add('division-view-chevron');

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill-rule', 'evenodd');
            path.setAttribute('d', 'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708');

            svg.appendChild(path);

            divisionView.appendChild(divisionViewText);
            divisionView.appendChild(svg);


            divisionName.appendChild(divisionNameMain);
            divisionNameContainer.appendChild(divisionLogo);
            divisionNameContainer.appendChild(divisionName);
            myDivisionLink.appendChild(divisionNameContainer);
            myDivisionLink.appendChild(divisionView);
            myDivision.appendChild(myDivisionLink);
            divisionsList.appendChild(myDivision);
        })

        divisionSide.appendChild(divisionsList);
        divisionSidesContainer.appendChild(divisionSide);
    })

    allDivisions.appendChild(divisionContainer);
}

function filterDivisionData() {
    const divisionSelection = divisionsDropdown.value;
    let filteredDivision;

    if (divisionSelection != '') {
        filteredDivision = data.filter(item => item.name === divisionSelection)
    }

    displayDivisions(filteredDivision);
}

divisionsDropdown.addEventListener('change', filterDivisionData)
