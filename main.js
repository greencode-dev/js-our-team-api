// 2. Dati del Team
const teamMembers = [
  {
    name: 'Marco Bianchi',
    role: 'Designer',
    email: 'marcobianchi@team.com',
    img: 'img/male1.png',
  },
  {
    name: 'Laura Rossi',
    role: 'Front-end Developer',
    email: 'laurarossi@team.com',
    img: 'img/female1.png',
  },
  {
    name: 'Giorgio Verdi',
    role: 'Back-end Developer',
    email: 'giorgioverdi@team.com',
    img: 'img/male2.png',
  },
  {
    name: 'Marta Ipsum',
    role: 'SEO Specialist',
    email: 'martarossi@team.com',
    img: 'img/female2.png',
  },
  {
    name: 'Roberto Lorem',
    role: 'SEO Specialist',
    email: 'robertolorem@team.com',
    img: 'img/male3.png',
  },
  {
    name: 'Daniela Amet',
    role: 'Analyst',
    email: 'danielaamet@team.com',
    img: 'img/female3.png',
  },
];

// 3. Manipolazione del DOM
const teamContainer = document.querySelector('.team-container');

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const cardHtml = `
        <div class="team-card">
            <img src="${member.img}" alt="Foto di ${member.name}" class="card-img">
            <div class="card-text">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p class="email">${member.email}</p>
            </div>
        </div>
    `;

  teamContainer.innerHTML += cardHtml;
}
