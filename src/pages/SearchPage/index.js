import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SearchPage = () => {
  const products = useSelector((state) => state.products.products)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
  }

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-center mb-4">Search Page</h1>
      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center mb-4"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control me-2"
          placeholder="Search products"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="row justify-content-center">
        {filteredProducts.length === 0 ? (
          <p>No matching products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Link
                to={`/product/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SearchPage
