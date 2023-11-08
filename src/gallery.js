import { getSlideIndex, showSlides } from "./slides";
import gallery1 from '../dist/images/gallery1.png'
import gallery2 from '../dist/images/gallery2.png'
import gallery3 from '../dist/images/gallery3.png'
import gallery4 from '../dist/images/gallery4.png'
import gallery5 from '../dist/images/gallery5.png'
import gallery6 from '../dist/images/gallery6.png'
import gallery7 from '../dist/images/gallery7.png'
import gallery8 from '../dist/images/gallery8.png'
import gallery9 from '../dist/images/gallery9.png'
import gallery10 from '../dist/images/gallery10.png'
import gallery11 from '../dist/images/gallery11.png'
import gallery12 from '../dist/images/gallery12.png'
import gallery13 from '../dist/images/gallery13.png'
import gallery14 from '../dist/images/gallery14.png'


const gallery = () =>{
    const content = document.querySelector('#content');

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const img1 = document.createElement('img');
    img1.src = gallery1;
    img1.id = "slide";
    img1.classList.add("slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = gallery2;
    img2.id = "slide";
    img2.classList.add("slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = gallery3;
    img3.id = "slide";
    img3.classList.add("slides");

    galleryDiv.appendChild(img3);

    const img4 = document.createElement('img');
    img4.src = gallery4;
    img4.id = "slide";
    img4.classList.add("slides");

    galleryDiv.appendChild(img4);

    const img5 = document.createElement('img');
    img5.src = gallery5;
    img5.id = "slide";
    img5.classList.add("slides");

    galleryDiv.appendChild(img5);

    const img6 = document.createElement('img');
    img6.src = gallery6;
    img6.id = "slide";
    img6.classList.add("slides");

    galleryDiv.appendChild(img6);

    const img7 = document.createElement('img');
    img7.src = gallery7;
    img7.id = "slide";
    img7.classList.add("slides");

    galleryDiv.appendChild(img7);

    const img8 = document.createElement('img');
    img8.src = gallery8;
    img8.id = "slide";
    img8.classList.add("slides");

    galleryDiv.appendChild(img8);

    const img9 = document.createElement('img');
    img9.src = gallery9;
    img9.id = "slide";
    img9.classList.add("slides");

    galleryDiv.appendChild(img9);

    const img10 = document.createElement('img');
    img10.src = gallery10;
    img10.id = "slide";
    img10.classList.add("slides");

    galleryDiv.appendChild(img10);

    const img11 = document.createElement('img');
    img11.src = gallery11;
    img11.id = "slide";
    img11.classList.add("slides");

    galleryDiv.appendChild(img11);

    const img12 = document.createElement('img');
    img12.src = gallery12;
    img12.id = "slide";
    img12.classList.add("slides");

    galleryDiv.appendChild(img12);

    const img13 = document.createElement('img');
    img13.src = gallery13;
    img13.id = "slide";
    img13.classList.add("slides");

    galleryDiv.appendChild(img13);

    const img14 = document.createElement('img');
    img14.src = gallery14;
    img14.id = "slide";
    img14.classList.add("slides");

    galleryDiv.appendChild(img14);

    const buttonDiv = document.createElement('div');
    buttonDiv.id = "button_div";

    const leftButton = document.createElement('button');
    leftButton.id = "left_button";
    leftButton.textContent = "<";
    leftButton.addEventListener('click', ()=>{
        showSlides(getSlideIndex() - 1);
    });

    buttonDiv.appendChild(leftButton);

    const rightButton = document.createElement('button');
    rightButton.id = "right_button";
    rightButton.textContent  = ">";
    rightButton.addEventListener('click', ()=> {
        showSlides(getSlideIndex() + 1)
    });

    buttonDiv.appendChild(rightButton);

    galleryDiv.appendChild(buttonDiv);

    content.appendChild(galleryDiv);

    showSlides(0);
}

export default gallery;