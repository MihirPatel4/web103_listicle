const header = document.querySelector('nav');
header.classList.add('header');

const headerLeft = document.createElement('ul');

const headerLogo = document.createElement('img');
headerLogo.src = '/logo.webp';

headerLeft.appendChild(headerLogo);

const headerTitle = document.createElement('li');
const titleText = document.createElement('strong');
titleText.textContent = 'The Minecraft Mob Index';

headerTitle.appendChild(titleText);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('ul')

const headerButton = document.createElement('li');

headerRight.appendChild(headerButton);

const homeLink = document.createElement('a');
homeLink.href = '/';
homeLink.textContent = 'Home';

headerButton.appendChild(homeLink);

header.appendChild(headerLeft);
header.appendChild(headerRight);