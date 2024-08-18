/**
 * Sélectionner et affiche les catégories pour le menu
 */
fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(categories => {
        const menu = document.querySelector('#categories-menu > .navbar-nav')
        const template = document.querySelector('#categories-template').content

        categories.forEach(category => {
            const categoriesMenu = document.importNode(template, true)

            categoriesMenu.querySelector('.nav-link').href = `category.html?name=${category}`
            categoriesMenu.querySelector('.nav-link').textContent = category.toUpperCase() // toUpperCase() met tout en majuscule

            menu.appendChild(categoriesMenu)
        })
    })
    .catch(error => console.error(error))
