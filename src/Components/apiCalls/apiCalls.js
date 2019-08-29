export const getPurchases = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(res => {
      if(!res.ok) {
        throw new Error('There was a problem with the server')
      }
      return res.json()
    })
    .catch(error => Error(error.message))
}

export const addPurchase = ({id, img, name, description, price}) => {
  const options = { 
    id: id,
    img: img, 
    name: name, 
    description: description, 
    price: price
  }

  return fetch('http://localhost:3001/api/v1/purchases', options)
    .then(res => {
      if(!res.ok) {
        throw new Error('There was a problem with the server')
      }
      return res.json()
    })
    .catch(error => Error(error.message))
}