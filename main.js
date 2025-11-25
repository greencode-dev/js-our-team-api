const teamContainer = document.querySelector('.team-container');

axios.get('https://boolean-teachers.github.io/mock/api/members/')
  .then((response) => {
    console.log('Response from API:', response);
    const teamMembers = response.data;
    console.log('Team members:', teamMembers);
    for (let i = 0; i < teamMembers.length; i++) {
      const member = teamMembers[i];
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

      teamContainer.innerHTML += cardHtml;
    }
  });
