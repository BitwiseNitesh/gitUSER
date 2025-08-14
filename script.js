const APIURL = "https://api.github.com/users/";

const main =document.getElementById("main");
const form =document.getElementById("form");

getUser("octocat");
async function getUser(username) {
    try{
        const {data} = await axios(APIURL + username);
        createUserCard(data);
    }catch(err){
        console.error("Error fetching user data:", err);
    }
   
}

function createUserCard(user) {
    const cardHTML =  `
    <div class="card" id="card">
        <div>
            <img src="${user.avatar_url}" alt="" class="avatars">
        </div>
        <div class="user-info">
            <h2 id="name">${user.name || user.login}</h2>
            <p id="bio">${user.bio || "User Bio"}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repositories</strong></li>
            </ul>
        </div>
    </div>
    `
    main.innerHTML = cardHTML;
}
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const user = search.value;

    if(user) {
       getUser(user);

       search
    }
});
