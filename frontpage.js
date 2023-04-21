function frontpage(tempmaininfor, teamMembers, numofteam) {
  let cardHtml = '';

  // create a card for each team member
  for (let i = 0; i < numofteam; i++) {
    const name = teamMembers[i].name;
    const position = teamMembers[i].position[0];
    const officeNumber = teamMembers[i].officeNumber;
    const email = teamMembers[i].email;
    const github = teamMembers[i].github;

    cardHtml += `
      <div class="card" style="width: 25rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${position}</h6>
          <p class="card-text">Office#:${officeNumber}</p>
          <a href="mailto:${email}" class="card-link">Email:${email}</a>
          <a href="${github}" class="card-link">GitHub:${github}</a>
        </div>
      </div>
    `;
  }

  const everything =
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${tempmaininfor.index}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link href="./style.css" rel="stylesheet">
    </head>
    
    <body>
    
      <h1> ${tempmaininfor.managername} Team</h1>
      <div class=content>
        <div class="card" style="width: 25rem;">
          <div class="card-body">
            <h5 class="card-title">${tempmaininfor.managername}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">Team Leader</p>
            <a href="mailto:${tempmaininfor.manageremail}" class="card-link">Email:${tempmaininfor.manageremail}</a>
            <a href="${tempmaininfor.managergithub}" class="card-link">GitHub:${tempmaininfor.managergithub}</a>
          </div>
        </div>
        
        ${cardHtml}
    
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="`
  return everything;
}
module.exports = frontpage;
