const renderMob = async () => {
  const requestedName = window.location.href.split('/').pop();

  const response = await fetch('/mobs');
  const data = await response.json();

  const mobContent = document.getElementById('mob-content');

  let mob;
  mob = data.find(mob => mob.name === requestedName);

  if (mob) {
    document.getElementById('image').src = mob.image;
    document.getElementById('name').textContent = mob.name;
    document.getElementById('health').textContent = 'Health Points: ' + mob.health;
    document.getElementById('behavior').textContent = 'Behavior: ' + mob.behavior;
    document.title = mob.name;
  }
  else {
    const message = document.createElement('h2');
    message.textContent = 'Mob not found';
    mobContent.appendChild(message);
  }
};

renderMob();