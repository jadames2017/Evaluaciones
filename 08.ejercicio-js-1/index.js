let frag = document.createDocumentFragment();
const userArray = document.querySelector('.userlist');
async function getUsers(numUsers) {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${numUsers}`
        );

        const users = await response.json();

        for (const user of users.results) {
            const newUser = document.createElement('li');
            newUser.innerHTML = `<article>
    <header>
    <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
    <h1>${user.name.first} ${user.name.last} </h1>
    </header>
    <p> (${user.gender}), ${user.login.username}, ${user.location.country}, ${user.email}</p>
    </article>`;

            frag.append(newUser);
        }

        userArray.append(frag);
    } catch (error) {
        console.log('Se ha presentado un error ' + error);
    }
}
getUsers(prompt(`Select yours numbers users view`));
