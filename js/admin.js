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


/**
 * Selectionner et afficher les commandes
 */
/*fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
    .then(carts => {
        const grid = document.querySelector('#carts-grid')
        const template = document.querySelector('#cart-template').content

        carts.forEach(cart => {
            const cartNode = document.importNode(template, true)

            cartNode.querySelector('.card-body .fw-bolder').textContent = `Commande # ${cart.id}`
            cartNode.querySelector('.card-body .cart').textContent = cart.date
            cartNode.querySelector('.btn-outline-dark').href = `cart.html?id=${cart.id}`

            grid.appendChild(cartNode)
        })
    })

    .catch(error => console.error(error))*/

    async function displayCartsWithUsernames() {
        try {
            
            // Récupérer les paniers
            const cartsResponse = await fetch('https://fakestoreapi.com/carts');
            const carts = await cartsResponse.json();
    
            // Parcourir les paniers pour récupérer les usernames
            for (const cart of carts) {
                const userId = cart.userId;
                const cartDate = cart.date;
                
                // Récupérer les informations utilisateur via userId
                const userResponse = await fetch(`https://fakestoreapi.com/users/${userId}`);
                const user = await userResponse.json();

                const grid = document.querySelector('#carts-grid')
                const template = document.querySelector('#cart-template').content
                
                // Afficher le panier avec le nom d'utilisateur
                const cartNode = document.importNode(template, true)
                cartNode.querySelector('.card-body .fw-bolder').textContent = `Commande # ${cart.id}`
                cartNode.querySelector('.card-body .cart').textContent = `${user.username}`
                cartNode.querySelector('.card-body .small').textContent = `${cartDate}`
                cartNode.querySelector('.btn-outline-dark').href = `cart.html?id=${cart.id}`
                grid.appendChild(cartNode)

                // Afficher le panier avec le nom d'utilisateur
                //console.log(`Cart ID: ${cart.id}, Username: ${user.username} Date : ${cartDate}`);
                
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    }
    
    // Appeler la fonction
    displayCartsWithUsernames();
    
