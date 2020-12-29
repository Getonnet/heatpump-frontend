import React, {useState, useEffect} from 'react'
import '../styles/pages/_cart.scss'
import '../styles/components/_contact-modal.scss'
import CartLineItem from '../components/cart-line-item'
import Modal from 'react-modal'
import ModalCloseIcon from '../images/svg/modalClose'
import InputNameIcon from '../images/input-name-icon'
import InputEmailIcon from '../images/input-email-icon'
import InputPhoneIcon from '../images/input-phone-icon'
// import HeatPumpImage from '../images/svg/heatpump-img'

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default function CartPage({items, total, chatid}) {
  // var subtitle
  const [modalIsOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({});

  useEffect(() => {
    console.log(chatid.chat_id);
  });

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleChange = ({currentTarget: input}) => {
    const inputData = {...data};
    inputData[input.name] = input.value;
    setData(inputData);
  }



  return (
    <div className='cart-page'>
      <div className='container'>
        <div className='card card--cart'>
          <table className='cart-table'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Brief Info</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {
                items.map(row => (
                  <CartLineItem key={row.id} product={row.id} name={row.names} price={row.prices} photo={row.photo} quantity={row.qty} />
                ))
              }
              {/*cart total*/}
              <tr>
                <td />
                <td>
                  <span className='discount'>Total</span>
                </td>
                <td />
                <td>{total} kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='cart-cta'>
          <button className='btn' onClick={openModal}>
            Send your request
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customModalStyles}
        ariaHideApp={false}
        contentLabel='Example Modal'>
        <div className='modal-header'>
          <h2>Contact Form</h2>
          <span onClick={closeModal}>
            <ModalCloseIcon />
          </span>
        </div>

        <form className='collect-data-form'>
          <div className='left'>
            <div className='form-field'>
              <label htmlFor='name'>Your Name</label>
              <div className='input-icon'>
                <div className='icon'>
                  <InputNameIcon />
                </div>
                <div className='input'>
                  <input type='text' id='name' name="name" onChange={handleChange} value={data.name || ''} placeholder='name' />
                </div>
              </div>
            </div>

            <div className='form-field'>
              <label htmlFor='email'>Your Email</label>
              <div className='input-icon'>
                <div className='icon'>
                  <InputEmailIcon />
                </div>
                <div className='input'>
                  <input type='text' id='email' name="email" onChange={handleChange} value={data.email || ''} placeholder='email' />
                </div>
              </div>
            </div>
            <div className='form-field'>
              <label htmlFor='phone'>Phone No.</label>
              <div className='input-icon'>
                <div className='icon'>
                  <InputPhoneIcon />
                </div>
                <div className='input'>
                  <input type='text' id='phone' name="phone" onChange={handleChange} value={data.phone || ''} placeholder='phone' />
                </div>
              </div>
            </div>
          </div>

          <div className='right'>
            <div className='form-field'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' name="message" onChange={handleChange} value={data.message || ''} rows='100%' />
            </div>
          </div>

          <div className='bottom'>
            <button type='submit' className='btn'>
              Send Request
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
