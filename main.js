const teamContainer = document.querySelector('.team-container');

function renderTeam(members, container) {
  container.innerHTML = ''; // Clear the container before adding new cards
  members.forEach(member => {
    console.log('Current member:', member);
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
    container.innerHTML += cardHtml;
  });
}

axios.get('https://boolean-teachers.github.io/mock/api/members/')
  .then((response) => {
    console.log('Response from API:', response);
    const teamMembers = response.data;
    console.log('Team members:', teamMembers);
    renderTeam(teamMembers, teamContainer);
  });
