const linkSocialMedia = {
  github:"pceolato",
  instagram: 'pceolatoo',
  // facebook: 'pedro.ceolato',
  linkedin: 'in/pedro-ceolato-81534a214'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos () {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`
  
  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}
getGitHubProfileInfos ()
