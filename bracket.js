const roundSelectors = document.querySelectorAll('.bracket-round-selector');
const rounds = document.querySelectorAll('.bracket-round-container');

function hideRounds(roundIdx) {
    if (window.innerWidth > 600) {
        rounds.forEach((round, i) => {
            round.classList.remove('hide-round');
            if (i < roundIdx) {
                round.classList.add('hide-round');
            }
        })
    } else {
        rounds.forEach((round, i) => {
            round.classList.remove('hide-round');
            if (i !== roundIdx) {
                round.classList.add('hide-round');
            }
        })
    }

    roundSelectors.forEach(selector => {
        selector.classList.remove('bracket-round-selected');
    })

    roundSelectors[roundIdx].classList.add('bracket-round-selected');
    roundSelectors[roundIdx].scrollIntoView({
        behavior: 'smooth',
        inline: 'center', // or 'start'
        block: 'nearest'
    });
}

function showRounds(rounds) {
    rounds.forEach(round => round.classList.remove('hide-round'));
}

roundSelectors.forEach((roundSelector, idx) => {
    roundSelector.addEventListener('click', () => {
        hideRounds(idx);
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        showRounds(rounds);
    }
})