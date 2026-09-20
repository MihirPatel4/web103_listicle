const renderMobs = async () => {
  const response = await fetch('/mobs');
  const data = await response.json();

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(mob => {
      const card = document.createElement('article');
      card.classList.add('card');

      const topContainer = document.createElement('header');
      const bottomContainer = document.createElement('footer');

      const mobImage = document.createElement('img');
      mobImage.src = mob.image;
      topContainer.appendChild(mobImage);

      const moreInfo = document.createElement('div');
      bottomContainer.appendChild(moreInfo);

      const name = document.createElement('h3');
      name.textContent = mob.name;
      moreInfo.appendChild(name);

      const link = document.createElement('a');
      link.textContent = 'More Info';
      link.href = `/mobs/${mob.name}`;
      moreInfo.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  }
  else {
    const message = document.createElement('h2');
    message.textContent = 'No mobs found';
    mainContent.appendChild(message);
  }
};

const requestedURL = window.location.href.split('/').pop();

if (requestedURL) {
  window.location.href = '../404.html';
}
else {
  renderMobs();
}