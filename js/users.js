/**
 * Sélectionner et affiche les users
 */
fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then(users => {
        const grid = document.querySelector('#users-grid')
        const template = document.querySelector('#user-template').content

        users.forEach(user => {
            const userNode = document.importNode(template, true)

            userNode.querySelector('.card-img-top').src = "assets/img/test.webp"
            userNode.querySelector('.card-img-top').alt = user.username
            userNode.querySelector('.card-body .fw-bolder').textContent = `${user.name.firstname} ${user.name.lastname}`
            userNode.querySelector('.card-body .username').textContent = user.username
            userNode.querySelector('.btn-outline-dark').href = `user.html?id=${user.id}`

            grid.appendChild(userNode)
        })
    })
    .catch(error => console.error(error))



