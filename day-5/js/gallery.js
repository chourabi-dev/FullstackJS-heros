let items = document.getElementsByClassName('gallery-bloc');
var urls = [];
var selectedIndex = 0;

for (let i = 0; i < items.length; i++) {
    const element = items[i];

    urls.push(element.children[0].getAttribute('src'));
    
}

var gallery = document.getElementById('my-gallery');

gallery.innerHTML='<img width="100%" src="'+urls[selectedIndex]+'" />';

console.log(urls);


document.getElementById('next-btn').addEventListener('click',function(){
    selectedIndex++;

    if (selectedIndex == urls.length) {
        selectedIndex = 0;
    }

    gallery.innerHTML='<img width="100%" src="'+urls[selectedIndex]+'" />';

})