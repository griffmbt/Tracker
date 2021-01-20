function addTrack() {
    track.append(tracker.cloneNode(true));
    const trackers = document.querySelectorAll('.tracker');
    trackers.forEach((item) => {
        item.addEventListener('dragstart', (evt) => {
            evt.target.style.backgroundColor = '#FFDC40';
            // textInputs.style.backgroundColor = '#FFDC40'
            dragElement = evt.target;
        })
    
        item.addEventListener('dragend', (evt) => {
            evt.target.style.backgroundColor = 'unset';
            dragElement = null;
        })
    });

    const buttonDelete = document.querySelectorAll('.group56')
    buttonDelete.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#833AE0';
        });
        item.addEventListener('mouseout', (event) => {
            event.target.style.backgroundColor = 'white';
        });

        //const parentElement = document.querySelectorAll('.tracker')
        item.addEventListener('click', () => {
            item.parentElement.remove();
        });
    });
    
   
}


const button = document.querySelector('.button');
const track = document.querySelector('.track');

const tracker = document.querySelector('.tracker');
const trackers = document.querySelectorAll('.tracker');

const textInputs = document.querySelectorAll('.text-input')
const buttonDelete = document.querySelector('.group56')
let dragElement;

button.addEventListener('click', addTrack);

buttonDelete.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#833AE0';
});
buttonDelete.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'unset';
});



trackers.forEach((item) => {
    item.addEventListener('dragstart', (evt) => {
        evt.target.style.backgroundColor = '#FFDC40';
        // textInputs.style.backgroundColor = '#FFDC40'
        dragElement = evt.target;
    })

    item.addEventListener('dragend', (evt) => {
        evt.target.style.backgroundColor = 'unset';
        dragElement = null;
    })
});



track.addEventListener('dragenter', (evt) => {
    evt.preventDefault();
    //evt.target.style.backgroundColor = '833AE0';
    //track.append(dragElement);
})

track.addEventListener('dragover', (evt) => {
    evt.preventDefault();
})

track.addEventListener('dragleave', (evt) => {
    evt.target.style.backgroundColor = 'white';
})

track.addEventListener('drop', (evt) => {
    track.append(dragElement);
    // track.insertBefore(dragElement, referenceElement);
})