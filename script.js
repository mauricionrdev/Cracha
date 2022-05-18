const user = {
  github: 'mauricionrdev',
  youtube: '#',
  instagram: 'mauricionrdev',
  facebook: 'mauricionrdev',
  twitter: 'mauricionrdev',
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${user[social]}`
  }
}

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${user.github}`

  fetch(url).then(response => response.json())
  .then(data =>  {
    userImg.src = data.avatar_url
    userName.textContent = data.name
    userGitHubLink.href = data.html_url
    userGitHub.textContent = data.login
    userGitHubBio.textContent = data.bio
  })
}

changeSocialMediaLinks()
getGitHubProfileInfo()