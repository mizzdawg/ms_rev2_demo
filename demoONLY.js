const navOver = document.querySelector('.nav-pop-menu-overlay');

document.addEventListener('click', (e) => {
    const trigger = e.target.closest(
        '.avail-btn, .app-drawer-close, .btn-edit-table, .ref-review-btn, .btn-primary, .btn-table'
    );

    if (trigger) {
        const moduleId =
            trigger.dataset.moduleId ||
            trigger.closest('.app-drawer')?.dataset.moduleId;

        if(!moduleId) return;

        const module = document.querySelector(
            `.app-drawer[data-module-id="${moduleId}"]`
        );

        if (!module) return;

        module.classList.toggle('app-drawer-active');
        navOverlay.classList.toggle('overlay-active');
    }

})

