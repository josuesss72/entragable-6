import React from 'react';

const Table = ({ purchase }) => {

  const dataPurchases = {
    date: purchase.createdAt.split(':')[0], 
    productsPurchases: purchase.cart.products
  }

  const TdPurchase = ({ product }) => {
    return (
      <tr className='tr_product'>
        <td className='ttl td' >{product.title}</td>
        <td className='qntty td'>{product.productsInCart.quantity}</td>
        <td className='prc td'>{product.price}</td>
      </tr> 
    )
  } 

  return (
    <div className='item_purchase'>
      <h4>{ dataPurchases.date }</h4>
      <table className='grid_table'>
        <tr className='grid_header_table'>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {
          dataPurchases.productsPurchases.map(product => (
            <TdPurchase key={ product.id } product={ product }/> 
          ))
        }
      </table>
    </div>
    	
  )
}

export default Table

