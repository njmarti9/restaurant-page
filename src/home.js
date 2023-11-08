import mainArt from "../dist/images/mainArt.jpg";

const home = () => {
    const content = document.querySelector('#content');

    document.body.style.backgroundImage = `url(${mainArt})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor = "black";

    const homeDiv = document.createElement('div');
    homeDiv.id = "home";

    let homeTitle = document.createElement('h2');
    homeTitle.textContent = "Available Now";

    homeDiv.appendChild(homeTitle);

    let restDesc = document.createElement('p');
    restDesc.textContent = 'Prepare for a thrilling adventure through a mysterious land' + 
    ' where puppets have taken control. You will set on an adventure to set things right and '+ 
    ' rid the world of the possesed puppets.';

    homeDiv.appendChild(restDesc);

    content.appendChild(homeDiv);
}

export default home;