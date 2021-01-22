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
            event.target.src = 'img/Group70.png';
        });
        item.addEventListener('mouseout', (event) => {
            event.target.src = 'img/Group56.svg';
        });
        //const parentElement = document.querySelectorAll('.tracker')
        item.addEventListener('click', () => {
            item.parentElement.remove();
        });
    });
    

    function showSortingIncreasing(textInputs) {
        let sorted = Array.from(textInputs).sort((a, b) => {
            let x = a.value;
            let y = b.value;

            return x - y;
        })
        
        for (let i = 0; i < trackers.length; i++) {
           trackers[i].insertBefore(sorted[i], trackers[i].children[1])
        }
        
        return sorted;
        
    }

    const textInputs = document.querySelectorAll('.text-input');
   
    let sortButtonTrecker;
    sortButtonUP.addEventListener('click', () => {
    const sortButton = document.querySelector('.group34')
    
        if (sortButtonTrecker != '2'){
            sortButton.src = 'img/Group34-greyUP.png';
            sortButtonTrecker = '2'
            showSortingIncreasing(textInputs);
        } else if (sortButtonTrecker != '1') {
            sortButton.src = 'img/Group34.svg';
            //showSortingDecreasing();
            sortButtonTrecker = '1'
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