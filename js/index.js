var search = document.querySelector('#search')
let username = document.querySelector("#username")
let numberFollowers = document.querySelector("#numberFollowers")
let numberFollowering = document.querySelector("#numberFollowering")
let numberRepos = document.querySelector("#numberRepos")
let searchTerm = " "
let div = document.querySelector(".main-items-1")
let avatar = document.querySelector("#img")
let users;
let contentFollowering = document.querySelector("#content-followering")
let contentRepos = document.querySelector("#content-repos")
let contentFollowers = document.querySelector("#content-followers")

const githubSearch = async() => {
    users = await fetch(
        `https://api.github.com/users/${searchTerm}`
    ).then(res => res.json())


    numberFollowers.innerHTML = users.followers
    numberFollowering.innerHTML = users.following
    numberRepos.innerHTML = users.public_repos
    username.innerHTML = users.login
    avatar.src = users.avatar_url

}


search.addEventListener("input", (e) => {
    searchTerm = e.target.value

    githubSearch()
    div.style.visibility = 'visible'
})