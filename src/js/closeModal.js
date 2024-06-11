
    function closeModal(evt) {
    if (evt.code === 'Escape' || evt.target.classList.contains('close-button')){
        this.close();
            }
          
        }

        export {closeModal}

       