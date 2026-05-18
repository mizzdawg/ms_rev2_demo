const roundSelectors = document.querySelectorAll('.bracket-round-selector-test');
const rounds = document.querySelectorAll('.bracket-round-container-test');

function hideRounds(roundIdx) {
    if (window.innerWidth > 600) {
        rounds.forEach((round, i) => {
            round.classList.remove('hide-round-test');
            if (i < roundIdx) {
                round.classList.add('hide-round-test');
            }
        })
    } else {
        rounds.forEach((round, i) => {
            round.classList.remove('hide-round-test');
            if (i !== roundIdx) {
                round.classList.add('hide-round-test');
            }
        })
    }

    roundSelectors.forEach(selector => {
        selector.classList.remove('bracket-round-selected-test');
    })

    roundSelectors[roundIdx].classList.add('bracket-round-selected-test');
    roundSelectors[roundIdx].scrollIntoView({
        behavior: 'smooth',
        inline: 'center', // or 'start'
        block: 'nearest'
    });
}

function showRounds(rounds) {
    rounds.forEach(round => round.classList.remove('hide-round-test'));
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