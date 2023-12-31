import logo from "../dist/images/logo.png";

const header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = "header";

    let restImage = document.createElement('img');
    restImage.src = logo;
    restImage.id = "logo";

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.id = "home_button";

    const storyButton = document.createElement('button');
    storyButton.textContent = "Story";
    storyButton.id = "story_button";

    const galleryButton = document.createElement('button');
    galleryButton.textContent = "Gallery";
    galleryButton.id = "gallery_button";

    headerDiv.appendChild(restImage);
    headerDiv.appendChild(homeButton);
    headerDiv.appendChild(storyButton);
    headerDiv.appendChild(galleryButton);

    return headerDiv;
}

export default header;