import React from 'react';
import './Container.css';
import Card from '../Card/Card.js'

const Container = ({ purchases, deleteOldPurchase }) => {
  const purchaseCards = purchases.map(purchase => {
    return <Card purchase={purchase} key={purchase.id} deleteOldPurchase={deleteOldPurchase} />
  })  
  return (
    <section>
      {purchaseCards}
    </section>  
  )
}

export default Container;