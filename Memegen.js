const btn = document.querySelector('#add')
const pic = document.querySelector('#pic')
const upper = document.querySelector('#top')
const bottom = document.querySelector('#bottom')
const memeList = document.querySelector('ul')

btn.addEventListener('submit', function(event) {
    event.preventDefault();

    const memeContainer = document.createElement('div');
    const newMeme = document.createElement('li');
    const newMemeImg = document.createElement('img');
    const memeTopText = document.createElement('h4');
    const memeBottomText = document.createElement('h4');
    const remove = document.createElement('button');

    newMemeImg.src = pic.value;
    memeTopText.innerText = upper.value;
    memeBottomText.innerText = bottom.value;
    pic.value = "";
    upper.value = "";
    bottom.value = "";
    memeList.append(newMeme);
    newMeme.append(memeContainer);
    memeContainer.append(memeTopText);
    memeContainer.append(newMemeImg);
    memeContainer.append(memeBottomText);
    remove.innerText = "X";
    newMeme.appendChild(remove)})

memeList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove()}})