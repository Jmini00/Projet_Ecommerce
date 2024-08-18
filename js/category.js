/**
 * Sélectionner et affiche les produits
 */
const params = new URLSearchParams(window.location.search)
const name = params.get('name')

fetch(`https://fakestoreapi.com/products/category/${name}`)
    .then(response => response.json())
    .then(products => {
        const grid = document.querySelector('#products-grid')
        const template = document.querySelector('#product-template').content

        products.forEach(product => {
            const productNode = document.importNode(template, true)

            productNode.querySelector('.card-img-top').src = product.image
            productNode.querySelector('.card-img-top').alt = product.title
            productNode.querySelector('.card-body .fw-bolder').textContent = product.title
            productNode.querySelector('.card-body .price').textContent = `${product.price.toFixed(2)} €`
            productNode.querySelector('.btn-outline-dark').href = `product.html?id=${product.id}`

            grid.appendChild(productNode)
        })
    })
    .catch(error => console.error(error))
