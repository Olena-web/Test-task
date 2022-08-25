function addModal() {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const modalBtn = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-button');


    function toggleModal() {
        modal.classList.add('show-modal');
    }
    function removeModal() {
        modal.classList.remove('show-modal');
        console.log('remove');
    }

    modalBtn.addEventListener('click', toggleModal);
    closeBtn?.addEventListener('click', removeModal);
    // document.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   if (modalContent) {
    //     if (e.target !== modalContent) { removeModal(); }
    //   }
    // });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            removeModal();
        }
    });
}

export default addModal;