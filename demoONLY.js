document.addEventListener('click', (e) => {
    const trigger = e.target.closest(
        '.avail-btn, .avail-module-x, .avail-module-submit, .btn-edit-table'
    );

    if (trigger) {
        const moduleId =
            trigger.dataset.moduleId ||
            trigger.closest('.avail-module')?.dataset.moduleId;

        if(!moduleId) return;

        const module = document.querySelector(
            `.avail-module[data-module-id="${moduleId}"]`
        );

        if (!module) return;

        module.classList.toggle('avail-module-active');
    }

})

