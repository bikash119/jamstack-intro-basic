const listRepos = async username =>{
  const repos = await fetch(
    `http://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => res.json())
    .catch(error => console.error(error));
    
    const markup = repos
      .map(
        repo => `
          <li>
            <a href = "${repo.html_url}">${repo.name}</a>
          </li>
        `
      )
      .join("")
      
      const content = document.getElementById('repos')
      content.innerHTML = `<ul>${markup}</ul>`;
};
listRepos('bikash119');