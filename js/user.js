/**
 * Récupération des détails d'un user
 */
const params = new URLSearchParams(window.location.search)
const idUser = params.get('id')

fetch(`https://fakestoreapi.com/users/${idUser}`)
    .then(response => response.json())
    .then(user => {
        const template = document.querySelector('#user-template').content
        const userDetail = document.importNode(template, true)

        userDetail.querySelector('.image').src = "assets/img/test.webp"
        userDetail.querySelector('.image').alt = user.username
        userDetail.querySelector('.title').textContent = `${user.name.firstname} ${user.name.lastname}`
        userDetail.querySelector('.usermail').textContent = `Email : ${user.email}`
        userDetail.querySelector('.username').textContent = `Pseudo : ${user.username}`
        userDetail.querySelector('.password').textContent = `Mot de passe : ${user.password}`
        userDetail.querySelector('.address').textContent = `Adresse : ${user.address.city} ${user.address.street} ${user.address.zipcode}`
        userDetail.querySelector('.phone').textContent = `Téléphone : ${user.phone}`

        document.querySelector('#users-grid').appendChild(userDetail)
    })
    .catch(error => console.error(error))