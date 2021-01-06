import React from 'react'
// import HeatPumpImage from '../images/svg/heatpump-img'
export default function CartLineItem({
  product,
  quantity,
  price,
  photo,
  name,
}) {
  
  return (
    <tr>
      <td>
        <div className='product-image'>
          <img src={photo} />
        </div>
      </td>
      <td>
        <div className='product-info'>{name}</div>
      </td>
      <td>{quantity}</td>
      <td>
        <div className='price'>{price} kr</div>
      </td>
    </tr>
  )
}
