import React from 'react'
import HeatPumpImage from '../images/svg/heatpump-img'

export default function CartLineItem() {
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
      <td>01</td>
      <td>
        <div className='price'>19 500 kr</div>
      </td>
    </tr>
  )
}
