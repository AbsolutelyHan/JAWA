// DOM SELECTION
// document.getElementById() -> Element

// const judul = document.getElementById('judul')
// judul.style.color = 'blue'
// judul.style.backgroundColor = 'black'


// getElementsByTagName()
const tag = document.getElementsByTagName('li')
for(i = 0; i < tag.length; i++) {
    tag[i].style.color = 'red'
}

tag[0].style.color = 'red'