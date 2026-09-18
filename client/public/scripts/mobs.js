const renderMobs = async () => {
  const response = await fetch('/mobs');
  const data = await response.json();

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(mob => {
      const card = document.createElement('div');
      card.classList.add('card');

      const topContainer = document.createElement('div');
      topContainer.classList.add('top-container');

      const bottomContainer = document.createElement('div');
      bottomContainer.classList.add('bottom-container');

      const mobImage = document.createElement('img');
      mobImage.src = mob.image;
      topContainer.appendChild(mobImage);

      const moreInfo = document.createElement('div');
      moreInfo.classList.add('more-info');
      bottomContainer.appendChild(moreInfo);

      const name = document.createElement('h3');
      name.textContent = mob.name;
      moreInfo.appendChild(name);

      const link = document.createElement('a');
      link.textContent = 'More Info';
      link.setAttribute('role', 'button');
      link.href = `/mobs/${mob.id}`;
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

renderMobs();