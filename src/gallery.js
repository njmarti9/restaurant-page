import { getSlideIndex, showSlides } from "./slides";

const gallery = () =>{
    const content = document.querySelector('#content');

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const img1 = document.createElement('img');
    img1.src = "dist/images/gallery1.png"
    img1.id = "slide";
    img1.classList.add("slides");

    galleryDiv.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "/dist/images/gallery2.png"
    img2.id = "slide";
    img2.classList.add("slides");

    galleryDiv.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = "./dist/images/gallery3.png"
    img3.id = "slide";
    img3.classList.add("slides");

    galleryDiv.appendChild(img3);

    const img4 = document.createElement('img');
    img4.src = "restaurant-page/dist/images/gallery4.png"
    img4.id = "slide";
    img4.classList.add("slides");

    galleryDiv.appendChild(img4);

    const img5 = document.createElement('img');
    img5.src = "/restaurant-page/dist/images/gallery5.png"
    img5.id = "slide";
    img5.classList.add("slides");

    galleryDiv.appendChild(img5);

    const img6 = document.createElement('img');
    img6.src = "./restaurant-page/dist/images/gallery6.png"
    img6.id = "slide";
    img6.classList.add("slides");

    galleryDiv.appendChild(img6);

    const img7 = document.createElement('img');
    img7.src = "./dist/images/gallery7.png"
    img7.id = "slide";
    img7.classList.add("slides");

    galleryDiv.appendChild(img7);

    const img8 = document.createElement('img');
    img8.src = "./dist/images/gallery8.png"
    img8.id = "slide";
    img8.classList.add("slides");

    galleryDiv.appendChild(img8);

    const img9 = document.createElement('img');
    img9.src = "./dist/images/gallery9.png"
    img9.id = "slide";
    img9.classList.add("slides");

    galleryDiv.appendChild(img9);

    const img10 = document.createElement('img');
    img10.src = "./dist/images/gallery10.png"
    img10.id = "slide";
    img10.classList.add("slides");

    galleryDiv.appendChild(img10);

    const img11 = document.createElement('img');
    img11.src = "./dist/images/gallery11.png"
    img11.id = "slide";
    img11.classList.add("slides");

    galleryDiv.appendChild(img11);

    const img12 = document.createElement('img');
    img12.src = "./dist/images/gallery12.png"
    img12.id = "slide";
    img12.classList.add("slides");

    galleryDiv.appendChild(img12);

    const img13 = document.createElement('img');
    img13.src = "./dist/images/gallery13.png"
    img13.id = "slide";
    img13.classList.add("slides");

    galleryDiv.appendChild(img13);

    const img14 = document.createElement('img');
    img14.src = "./dist/images/gallery14.png"
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