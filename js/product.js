/**
 * Récupération des détails d'un produit
 */
const params = new URLSearchParams(window.location.search)
const idProduct = params.get('id')

fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then(response => response.json())
    .then(product => {
        const template = document.querySelector('#product-template').content
        const productDetail = document.importNode(template, true)

        productDetail.querySelector('.image').src = product.image
        productDetail.querySelector('.image').alt = product.title
        productDetail.querySelector('.title').textContent = product.title
        productDetail.querySelector('.description').textContent = product.description
        productDetail.querySelector('.price').textContent = `${product.price} €`
        productDetail.querySelector('.category').textContent = `Catégorie : ${product.category}`

        document.querySelector('#products-grid').appendChild(productDetail)
    })
    .catch(error => console.error(error))
