const story = () =>{
    const content = document.querySelector('#content');

    const storyDiv = document.createElement('div');
    storyDiv.id = "story";

    const item1 = document.createElement('div');

    const item1_title = document.createElement('h3');
    item1_title.textContent = "Korean Fried Chicken";
    item1.appendChild(item1_title);

    const item1_desc = document.createElement('p');
    item1_desc.textContent = "This crispiest chicken with a sweet and spicy sauce that will blow your mind";
    item1.appendChild(item1_desc);

    storyDiv.appendChild(item1);

    content.appendChild(storyDiv);
}

export default story;