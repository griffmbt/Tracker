function addTrack() {
    track.append(tracker.cloneNode(true));
}


const button = document.querySelector('.button');
const track = document.querySelector('.track')
const tracker = document.querySelector('.tracker')

button.addEventListener('click', addTrack);
