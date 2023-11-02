const gallery = () =>{
    const content = document.querySelector('#content');

    const galleryDiv = document.createElement('div');
    galleryDiv.id = "gallery";

    const address = document.createElement('h2');
    address.textContent = "1234 Easy St.";
    galleryDiv.appendChild(address);

    const phone_number = document.createElement('h2');
    phone_number.textContent = '(555)-555-5555';
    galleryDiv.appendChild(phone_number);

    content.appendChild(galleryDiv);
}

export default gallery;