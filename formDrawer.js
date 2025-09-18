const editModuleBtn = document.querySelector('.edit-game-btn')
const editModule = document.querySelector('.edit-module-game-details')
const exitModuleBtn = document.querySelector('.edit-module-x-icon')
const submitModuleBtn = document.querySelector('.edit-module-submit-btn')

editModuleBtn.addEventListener('click', () => {
    toggleModule();
})

exitModuleBtn.addEventListener('click', () => {
    toggleModule();
})

submitModuleBtn.addEventListener('click', () => {
    toggleModule();
})

function toggleModule() {
    editModule.classList.toggle('edit-module-active')
}

const changeVenue = document.querySelector


const gameRegulation = document.querySelector('label[for="game-regulation"')
const gameForfeit = document.querySelector('label[for="game-forfeit"]')
const gameOvertime = document.querySelector('label[for="game-overtime"]')
const gamePenalties = document.querySelector('label[for="game-penalties"]')
const gameEndDetails = document.querySelectorAll('.edit-end-details')
const gameForfeitDetails = document.querySelector('.edit-end-forfeit-details')
const gamePenaltiesDetails = document.querySelector('.edit-end-penalties-details')

function toggleEndOptions(section) {
    gameEndDetails.forEach(el => {
        el.classList.remove('details-active')
    })

    if(section.textContent.trim() === 'Forfeit') {
        gameForfeitDetails.classList.add('details-active')
    }

    if(section.textContent.trim() === 'Penalties') {
        gamePenaltiesDetails.classList.add('details-active')
    }
}

gameForfeit.addEventListener('click', (event) => {
    toggleEndOptions(event.currentTarget)
})

gamePenalties.addEventListener('click', (event) => {
    toggleEndOptions(event.currentTarget)
})

gameRegulation.addEventListener('click', (event) => {
    toggleEndOptions(event.currentTarget)
})

gameOvertime.addEventListener('click', (event) => {
    toggleEndOptions(event.currentTarget)
})

// change venue module JS
const venueChangeModule = document.querySelector('.edit-module-change-venue')
const venueChangeSelect = document.querySelector('.edit-change-venue')
const venueChangeCloseBtn = document.querySelector('.edit-module-x-icon-venue')
const venueChangeSubmitBtn = document.querySelector('.venue-module-submit-btn')

venueChangeSelect.addEventListener('click', () => {
    venueChangeModule.classList.toggle('edit-module-active')
})

venueChangeCloseBtn.addEventListener('click', () => {
    venueChangeModule.classList.toggle('edit-module-active')
})

venueChangeSubmitBtn.addEventListener('click', () => {
    venueChangeModule.classList.toggle('edit-module-active')
})

// open and close card module JS
const cardInfoModule = document.querySelector('.edit-module-home-player-details')
const cardInfoHome = document.querySelector('.edit-card-info-home');

cardInfoHome.addEventListener('click', () => {
    cardInfoModule.classList.toggle('edit-module-active')
})

const playersCloseBtn = document.querySelector('.edit-module-x-icon-players')

playersCloseBtn.addEventListener('click', () => {
    cardInfoModule.classList.toggle('edit-module-active')
})



//vars and functions for gathering submitted player card data and displaying it on the edit game details module
const playersSubmitBtn = document.querySelector('.players-module-submit-btn')
const homeTeamCardDisplay = document.querySelector('.home-player-card') 
const homePlayerList = document.querySelectorAll('.edit-select-player-group')

playersSubmitBtn.addEventListener('click', () => {
    const homeTeamCards = [];
    homePlayerList.forEach(player => {
        const playerLabel = player.querySelector('.edit-select-player')
        const playerInput = playerLabel.querySelector('.edit-player-option')

        if(playerInput.checked) {
            const playerName = playerInput.value;
            const playerCards = [];

            const playerSubChecks = player.querySelectorAll('.edit-card-option')
            playerSubChecks.forEach(check => {
                if(check.checked) {
                    playerCards.push(check.value)
                }
            })
            homeTeamCards.push({
                playerName: playerName,
                playerCards: playerCards
            })
        }
    })

    if(homeTeamCards.length >= 1) {
        homeTeamCardDisplay.innerHTML = '';
        homeTeamCardDisplay.classList.add('player-card-active')
        const cardHeader = document.createElement('span')
        cardHeader.classList.add('edit-module-header-text')
        cardHeader.textContent ='Home Team Cards'
        homeTeamCardDisplay.appendChild(cardHeader)

        const cardList = document.createElement('div')
        homeTeamCards.forEach(entry => {
            const playerEntry = document.createElement('span')
            playerEntry.classList.add('edit-module-player-name')  
            playerEntry.textContent = entry.playerName
            cardList.appendChild(playerEntry)

            const cards = entry.playerCards
            cards.forEach(card => {
                const cardDetail = document.createElement('span')
                cardDetail.classList.add('edit-module-player-card')  
                cardDetail.textContent = '- ' + card
                cardList.appendChild(cardDetail)
            })
    })
        homeTeamCardDisplay.appendChild(cardList)
    }
    
    cardInfoModule.classList.toggle('edit-module-active')

})



document.querySelectorAll('.edit-player-option').forEach(player => {
    player.addEventListener('change', () => {
        const playerCardOptions = player.parentElement.nextElementSibling;
        if (player.checked) {
            playerCardOptions.classList.add('player-card-options-active')
        } else {
            playerCardOptions.classList.remove('player-card-options-active')
        }
    })
}) 


