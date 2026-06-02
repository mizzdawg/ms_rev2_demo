let currentRegistrationSection = 0;

const registrationSections = [...document.querySelectorAll('.reg-section')];

function renderRegistrationForm() {
    registrationSections.forEach((section, index) => {
        section.hidden = index !== currentRegistrationSection;
    })
}

function nextRegistrationStep() {
    if (currentRegistrationSection < registrationSections.length - 1) {
        currentRegistrationSection++;
        renderRegistrationForm();
    }
}

function previousRegistrationStep() {
    if (currentRegistrationSection > 0) {
        currentRegistrationSection--;
        renderRegistrationForm();
    }
}

document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', nextRegistrationStep);
});

document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', previousRegistrationStep);
});

renderRegistrationForm();