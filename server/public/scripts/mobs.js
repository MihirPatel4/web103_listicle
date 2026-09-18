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

      topContainer.style.backgroundImage = `url(${mob.image})`;

      const name = document.createElement('h3');
      name.textContent = mob.name;
      bottomContainer.appendChild(name);

      const link = document.createElement('a');
      link.textContent = 'More Info >';
      link.setAttribute('role', 'button');
      link.href = `/mobs/${mob.id}`;
      bottomContainer.appendChild(link);

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