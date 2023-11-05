const story = () =>{
    const content = document.querySelector('#content');

    const storyDiv = document.createElement('div');
    storyDiv.id = "story";

    const story_title = document.createElement('h2');
    story_title.textContent = "Story";
    storyDiv.appendChild(story_title);

    const story_desc = document.createElement('p');
    story_desc.textContent = "You are a puppet created by Geppetto who’s caught in a web of lies with unimaginable monsters and untrustworthy figures standing between you and the events that have befallen the world of Lies of P.";
    storyDiv.appendChild(story_desc);

    const story_desc2 = document.createElement('p');
    story_desc2.textContent = "You are awakened by a mysterious voice that guides you through the plagued city of Krat - a once lively place that has been poisoned by madness and bloodlust.";
    storyDiv.appendChild(story_desc2);

    const story_desc3 = document.createElement('p');
    story_desc3.textContent = "In our soulslike, you must adapt yourself and  your weapons to face untold horrors, untangle the unfathomable secrets of the city's elites and choose whether to confront predicaments with the truth or weave lies to overcome them on the journey to find yourself.";
    storyDiv.appendChild(story_desc3);
    
    content.appendChild(storyDiv);
}

export default story;