const mql = window.matchMedia('(max-width: 768px');
const bracketRounds = document.querySelectorAll('.bracket-round');
const matchHeight = document.querySelector('.bracket-round--matchup').offsetHeight;
const baseGap = 20;
let prevGap = 20;
let observer;

// func to set mobile gap and padding top for each bracket round 
function setMobileBracketSpacing(rounds) {
    rounds.forEach((round, i) => {
        let gap, paddingTop;

        // calculate gap and padding top needed 
        if(i === 0) {
            gap = baseGap;
            paddingTop = 0;
        } else {
            paddingTop = (matchHeight + prevGap) / 2;
            gap = prevGap * 2 + matchHeight;
        }

        const inner = round.querySelector('.bracket-round--inner')

        // set gap and padding top for round
        inner.style.gap = `${gap}px`;
        inner.style.paddingTop = `${paddingTop}px`;

        // put calculations into dataset object for reset when round is not focused
        inner.dataset.gap = gap;
        inner.dataset.paddingTop = paddingTop;

        // update prevGap var for next round's calculation
        prevGap = gap;    
    });
}

// func to remove mobile gap and padding top for each bracket round
function removeMobileBracetSpacing(rounds) {
    rounds.forEach((round) => {
        const inner = round.querySelector('.bracket-round--inner');        
        inner.removeAttribute('style');
    });
}

// set initial gap and padding top for each bracket round 
// bracketRounds.forEach((round, i) => {
//     let gap, paddingTop;

//     // calculate gap and padding top needed 
//     if(i === 0) {
//         gap = baseGap;
//         paddingTop = 0;
//     } else {
//         paddingTop = (matchHeight + prevGap) / 2;
//         gap = prevGap * 2 + matchHeight;
//     }

//     const inner = round.querySelector('.bracket-round--inner')

//     // set gap and padding top for round
//     inner.style.gap = `${gap}px`;
//     inner.style.paddingTop = `${paddingTop}px`;

//     // put calculations into dataset object for reset when round is not focused
//     inner.dataset.gap = gap;
//     inner.dataset.paddingTop = paddingTop;

//     // update prevGap var for next round's calculation
//     prevGap = gap;
// });

// intersectionObserver options
const options = {
    root: document.querySelector('.bracket'),
    threshold: 0.6
}

// intersectionObserver callback
const callback = (entries) => {
    entries.forEach((entry) => {
        // grab bracket round element that displays all of that round's matchups
        const inner = entry.target.querySelector('.bracket-round--inner');
        const nextRound = entry.target.nextElementSibling;
        const nextInner = nextRound?.querySelector('.bracket-round--inner');
        if(entry.isIntersecting) {
            // entry.target.classList.add('focused');

            // reduce gap, remove padding to trigger CSS transition
            inner.style.gap = '20px';
            inner.style.paddingTop = '0px';

            if (nextInner) {
                nextInner.style.paddingTop = (matchHeight + baseGap) / 2 + 'px';
                nextInner.style.gap = baseGap * 2 + matchHeight + 'px'; 
            }
        }
        else {
            // entry.target.classList.remove('focused');
 
            // restore gap and padding top from element's dataset object
            inner.style.gap = inner.dataset.gap + 'px';
            inner.style.paddingTop = inner.dataset.paddingTop + 'px';
        }
    })
}

function runMobileBracket(e) {
    if (e.matches) {
        setMobileBracketSpacing(bracketRounds);
        observer = new IntersectionObserver(callback, options);
        bracketRounds.forEach(round => observer.observe(round));
        console.log('running observer')
    } else {
         console.log(' not running observer')
        if (observer) {
            observer.disconnect();
            observer = null;
            removeMobileBracetSpacing(bracketRounds);
        }
    }
}

mql.addEventListener('change', runMobileBracket);
runMobileBracket(mql);