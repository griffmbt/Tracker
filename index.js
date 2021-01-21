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
        console.log(item)
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

const textInputs = document.querySelectorAll('.text-input');
const buttonDelete = document.querySelector('.group56');
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
        dragElement = evt.target;
    })

    item.addEventListener('dragend', (evt) => {
        evt.target.style.backgroundColor = 'unset';
        dragElement = null;
    })
});



track.addEventListener('dragenter', (evt) => {
    evt.target.parentElement.style['border-bottom'] = 'solid 3px blueviolet';
    evt.preventDefault();
})

track.addEventListener('dragover', (evt) => {
    evt.preventDefault();
})

track.addEventListener('dragleave', (evt) => {
    evt.target.parentElement.style['border-bottom'] = '';
    evt.target.style.backgroundColor = 'unset';
})

track.addEventListener('drop', (evt) => {
    evt.target.parentElement.style['border-bottom'] = '';
   track.insertBefore(dragElement, evt.target.parentElement);
})