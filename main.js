const socialMediaLinks = {
  github: 'wallacev',
}
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      personalProfilePicture.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      bio.textContent = data.bio
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
