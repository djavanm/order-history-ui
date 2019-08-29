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

export const postPurchase = (newPurchase) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newPurchase),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch('http://localhost:3001/api/v1/purchases', options)
    .then(res => {
      if(!res.ok) {
        throw new Error('There was a problem with the server')
      }
      return res.json()
    })
    .catch(error => Error(error.message))
}