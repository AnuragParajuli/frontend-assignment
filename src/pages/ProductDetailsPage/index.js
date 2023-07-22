import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.products.products)
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="product-details-page">
      <h1>Product Details</h1>
      <div className="product-details-card">
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailsPage
