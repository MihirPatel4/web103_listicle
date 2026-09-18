const renderMob = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop());

  const response = await fetch('/mobs');
  const data = await response.json();

  const mobContent = document.getElementById('mob-content');

  let mob;
  mob = data.find(gift => gift.id === requestedID);

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