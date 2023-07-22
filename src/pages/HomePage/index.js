import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../../features/productSlice'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)

  const { data, isLoading } = useQuery('products', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  })

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data))
    }
  }, [data, dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-center mb-4">Online Store</h1>
      <div className="row justify-content-center">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  )
}

export default HomePage
