
function frontpage(tempmaininfor, tempbasicinfor) {
  let everything =
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

          <div class="card" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">${tempbasicinfor.id1}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${tempbasicinfor.position1}</h6>
                <p class="card-text">Office#:${tempbasicinfor.officenumber1}</p>
                <a href="mailto:${tempbasicinfor.email1}" class="card-link">Email:${tempbasicinfor.email1}</a>
                <a href="${tempbasicinfor.github1}" class="card-link">GitHub:${tempbasicinfor.github1}</a>
            </div>
        </div>

            <div class="card" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">${tempbasicinfor.id2}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${tempbasicinfor.position2}</h6>
                    <p class="card-text">Office#:${tempbasicinfor.officenumber2}</p>
                    <a href="mailto:${tempbasicinfor.email2}" class="card-link">Email:${tempbasicinfor.email2}</a>
                    <a href="${tempbasicinfor.github2}" class="card-link">GitHub:${tempbasicinfor.github2}</a>
                </div>
            </div>
    
            <div class="card" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">${tempbasicinfor.id3}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${tempbasicinfor.position3}</h6>
                    <p class="card-text">Office#:${tempbasicinfor.officenumber3}</p>
                    <a href="mailto:${tempbasicinfor.email2}" class="card-link">Email:${tempbasicinfor.email3}</a>
                    <a href="${tempbasicinfor.github3}" class="card-link">GitHub:${tempbasicinfor.github3}</a>
                </div>
            </div>

            <div class="card" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">${tempbasicinfor.id4}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${tempbasicinfor.position4}</h6>
                    <p class="card-text">Office#:${tempbasicinfor.officenumber4}</p>
                    <a href="mailto:${tempbasicinfor.email4}" class="card-link">Email:${tempbasicinfor.email4}</a>
                    <a href="${tempbasicinfor.github4}" class="card-link">GitHub:${tempbasicinfor.github4}</a>
                </div>
            </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`

  return everything;
}

module.exports = frontpage;
