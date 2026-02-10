const navOver = document.querySelector('.nav-pop-menu-overlay');
const confirmBackdrop = document.querySelector('.app-confirm-modal--backdrop');

document.addEventListener('click', (e) => {
    const trigger = e.target.closest(
        '.btn-edit, .btn-icon, .btn-cancel, .btn-delete, .avail-btn, .app-drawer-close, .btn-edit-table, .ref-review-btn, .btn-primary, .btn-table'
    );

    if (!trigger) return;

    const moduleId = trigger.dataset.moduleId;

    const container = document.querySelector(
        `.app-drawer[data-module-id="${moduleId}"], .app-confirm-modal[data-module-id="${moduleId}"]`
    )

    if (!moduleId || !container) return;

    if (container.classList.contains('app-confirm-modal')) {
        container.classList.toggle('confirm-modal-active');
        confirmBackdrop.classList.toggle('app-confirm-modal--backdrop-active');
    } else {
        container.classList.toggle('app-drawer-active');
        navOver.classList.toggle('overlay-active');
    }
});

