const roundLabelBtns = document.querySelectorAll('.bracket-round--label-btn');
const bracketRounds = document.querySelectorAll('.round');

roundLabelBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        bracketRounds.forEach((round) => {
            round.style.transform = `translateX(${-i * 100}%)`;
        });
        btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    });
});