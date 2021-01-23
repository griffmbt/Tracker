function addTrack() {

    function showSortingIncreasing() {
        const textInputs2 = document.querySelectorAll('.text-input');
        const trackers = document.querySelectorAll('.tracker');
        let sorted = Array.from(textInputs2).sort((a, b) => {
            let x = a.value;
            let y = b.value;

            if(x > y) {
                return 1;
            } else if (x < y) {
                return -1;
            } else {
                return 0;
            }
            
        });
        
        for (let i = 0; i < trackers.length; i++) {
           trackers[i].insertBefore(sorted[i], trackers[i].children[1]);
        };
        
        return sorted;
    }

    function showSortingDecreasing() {
        const textInputs2 = document.querySelectorAll('.text-input');
        const trackers = document.querySelectorAll('.tracker');
        let sorted = Array.from(textInputs2).sort((a, b) => {
            let x = a.value;
            let y = b.value;

            if(x > y) {
                return -1;
            } else if (x < y) {
                return 1;
            } else {
                return 0;
            }
        });
        
        for (let i = 0; i < trackers.length; i++) {
           trackers[i].insertBefore(sorted[i], trackers[i].children[1]);
        };
        
        return sorted;
    };


    track.append(tracker.cloneNode(true));

    const trackers = document.querySelectorAll('.tracker');
    const buttonDelete = document.querySelectorAll('.group56');
    const group36 = document.querySelector('.group36');
    const textInputs = document.querySelectorAll('.text-input');
    const sortButton = document.querySelector('.group34');
    let sortButtonTrecker;

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

    trackers.forEach((item) => {
        item.addEventListener('dragstart', (evt) => {
           item.style.backgroundColor = '#FFDC40';
            dragElement = item;
        });
    
        item.addEventListener('dragend', (evt) => {
           item.style.backgroundColor = 'unset';
            dragElement = null;
        });
    });

    buttonDelete.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            event.target.src = 'img/Group70.png';
        });
        item.addEventListener('mouseout', (event) => {
            event.target.src = 'img/Group56.svg';
        });
        item.addEventListener('click', () => {
            item.parentElement.remove();
        });
    });
    
    tracker.addEventListener('mousedown', (evt) => {
        
        if(evt.target === group36) {
            evt.target.draggable = true;
        } else {
            evt.target.draggable = false;
        };
    });

    sortButtonUP.addEventListener('click', () => {
        const sortButton = document.querySelector('.group34');
    
        if (sortButtonTrecker != '2'){
            sortButton.src = 'img/Group34-blackUP.png';
            showSortingIncreasing();

            sortButtonTrecker = '2';
            checkSortButton = '2';
            
        } else if (sortButtonTrecker != '1') {
            sortButton.src = 'img/Group34-2.png';
            showSortingDecreasing();

            sortButtonTrecker = '1';
            checkSortButton = '1';
        }
    });
   
}


const button = document.querySelector('.button');

const track = document.querySelector('.track');
const tracker = document.querySelector('.tracker');

const trackers = document.querySelectorAll('.tracker');
const textInputs = document.querySelectorAll('.text-input');

const buttonDelete = document.querySelector('.group56');

const sortButton = document.querySelector('.group34')
const sortButtonUP = document.querySelector('.group34-button')
let dragElement;
let checkSortButton = '1';

button.addEventListener('click', addTrack);

buttonDelete.addEventListener('mouseover', (event) => {
    event.target.src = 'img/Group70.png';
});
buttonDelete.addEventListener('mouseout', (event) => {
    event.target.src = 'img/Group56.svg';
});
buttonDelete.addEventListener('click', () => {
    buttonDelete.src = 'img/Group56.svg';
    buttonDelete.parentElement.remove();
});

trackers.forEach((item) => {
    item.addEventListener('dragstart', (evt) => {
        item.style.backgroundColor = '#FFDC40';
        dragElement = item;
    })

    item.addEventListener('dragend', (evt) => {
        item.style.backgroundColor = 'unset';
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


sortButtonUP.addEventListener('mouseover', (event) => {
    const sortButton = document.querySelector('.group34');

    if (checkSortButton === '2'){
        sortButton.src = 'img/Group34-blackUP.png';
    } else if (checkSortButton === '1') {
        sortButton.src = 'img/Group34-2.png';
    }
});

sortButtonUP.addEventListener('mouseout', (event) => {
    const sortButton = document.querySelector('.group34');

    if (checkSortButton === '2'){
        sortButton.src = 'img/Group34-greyUP.png';
    } else if (checkSortButton === '1') {
        sortButton.src = 'img/Group34.svg';
    }
});

