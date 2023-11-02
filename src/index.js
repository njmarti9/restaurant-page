import pageload from './pageload';
import clearPage from './clearpage';
import home from './home';
import story from './story';
import gallery from './gallery';

pageload();

const homeButton = document.querySelector('#home_button');
const storyButton = document.querySelector('#story_button');
const galleryButton = document.querySelector('#gallery_button');

homeButton.addEventListener('click', ()=>{
    clearPage();
    home();
})

storyButton.addEventListener('click', ()=>{
    clearPage();
    story();
})

galleryButton.addEventListener('click', ()=>{
    clearPage();
    gallery();
})