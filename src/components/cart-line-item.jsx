import React, { useState } from 'react'
import HeatPumpImage from '../images/svg/heatpump-img'

export default function CartLineItem({product, quantity}) {
  const [products, setProducts] = useState([]);

  const getProduct = async(e) => {
    //get product by id and hit product API
  }

  return (
    <tr>
      <td>
        <div className='product-image'>
          <HeatPumpImage />
        </div>
      </td>
      <td>
        <div className='product-info'>
          Daikin Stylish model xx, yy kw for heating / cooling of zz sqm. Power
          requirement, 13 amp grounded electrical outlet.
        </div>
      </td>
      <td>{quantity}</td>
      <td>
        <div className='price'>19 500 kr</div>
      </td>
    </tr>
  )
}
