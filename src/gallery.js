import { getSlideIndex, showSlides } from "./slides";

const gallery = () =>{
    const content = document.querySelector('#content');

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const img1 = document.createElement('img');
    img1.src = "../dist/images/gallery1.png"
    img1.id = "slide";
    img1.classList.add("slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "../dist/images/gallery2.png"
    img2.id = "slide";
    img2.classList.add("slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = "../dist/images/gallery3.png"
    img3.id = "slide";
    img3.classList.add("slides");

    galleryDiv.appendChild(img3);

    const img4 = document.createElement('img');
    img4.src = "../dist/images/gallery4.png"
    img4.id = "slide";
    img4.classList.add("slides");

    galleryDiv.appendChild(img4);

    const img5 = document.createElement('img');
    img5.src = "../dist/images/gallery5.png"
    img5.id = "slide";
    img5.classList.add("slides");

    galleryDiv.appendChild(img5);

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