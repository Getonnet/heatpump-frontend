import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

import { selectChatId } from '../store/chatLogSlice'
import CartLineItem from '../components/cart-line-item'
import Modal from 'react-modal'

import '../styles/pages/_cart.scss'
import '../styles/components/_contact-modal.scss'

import ModalCloseIcon from '../images/svg/modalClose'
import InputNameIcon from '../images/input-name-icon'
import InputEmailIcon from '../images/input-email-icon'
import InputPhoneIcon from '../images/input-phone-icon'

import configure from '../config'
import { Link } from 'react-router-dom'

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

export default function CartPage({ products }) {
  const { t } = useTranslation()
  // var subtitle
  let chatId = useSelector(selectChatId)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({ uniq_session: chatId })

  const productsArr = Object.values(products)
  const cartTotal = productsArr.reduce((a, b) => a + parseInt(b['prices']), 0)

  useEffect(() => {
    if (chatId !== '') {
      fetchData()
    }
  }, [chatId])

  const fetchData = async () => {
    await axios
      .get(configure.kindly_api + chatId, {
        headers: {
          Authorization: `Bearer ${configure.token}`,
        },
      })
      .then(response => {
        let res_data = response.data
        setChatData(res_data.chat.context)
      })
  }

  const setChatData = chatData => {
    let formattedProducts = {}
    productsArr.map(row => (formattedProducts[row.id] = row.qty)) //order products list
    setData(prevState => ({
      ...prevState,
      name: chatData.navn || '',
      email: chatData.epost || '',
      contact: chatData.telefonnummer || '',
      address: chatData.gateadresse || '',
      zip_code: chatData.postnummer || '',
      area_info: chatData.kvadratmeter || '',
      wall_type: chatData.veggtype || '',
      insulated: chatData.isolert || '',
      uniq_session: chatId || '',
      items: formattedProducts,
    }))
  }

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

  const handleChange = ({ currentTarget: input }) => {
    setData(prevState => ({
      ...prevState,
      [input.name]: input.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let submit_config = {
      method: 'post',
      url: configure.API_URL + 'make-order',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: JSON.stringify(data),
    }

    await axios(submit_config)
      .then(function (response) {
        if (response.status === 200) {
          window.location.href = '/thanks' // redirect to thanks page
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='cart-page'>
      <div className='container'>
        <div className='card card--cart'>
          <table className='cart-table'>
            <thead>
              <tr>
                <th> {t('Product')} </th>
                <th> {t('Brief Info')}</th>
                <th> {t('Quantity')}</th>
                <th> {t('Price')} </th>
              </tr>
            </thead>

            <tbody>
              {productsArr.map(row => (
                <CartLineItem
                  key={row.id}
                  product={row.id}
                  name={row.names}
                  price={row.prices}
                  photo={row.photo}
                  quantity={row.qty}
                />
              ))}
              {/*cart total*/}
              <tr>
                <td />
                <td>
                  <span className='discount'> {t('Total')} </span>
                </td>
                <td />
                <td>{cartTotal} kr</td>
              </tr>
              {/*link to terms*/}
              <tr style={{ textAlign: 'center' }} className='terms-row'>
                <td colSpan={4} style={{ textAlign: 'center' }}>
                  <Link to='/vilkår'>{t('Standard terms of sale')}</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='cart-cta'>
          <button className='btn' onClick={openModal}>
            {t('Send your request')}
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
          <h2> {t('Contact Form')} </h2>
          <span onClick={closeModal}>
            <ModalCloseIcon />
          </span>
        </div>

        <form className='collect-data-form'>
          <input type='hidden' name='zip_code' value={data.zip_code || ''} />
          <input type='hidden' name='area_info' value={data.area_info || ''} />
          <input type='hidden' name='insulated' value={data.insulated || ''} />
          <input type='hidden' name='wall_type' value={data.wall_type || ''} />

          <div className='left'>
            <div className='form-field'>
              <label htmlFor='name'> {t('Your Name')} </label>
              <div className='input-icon'>
                <div className='icon'>
                  <InputNameIcon />
                </div>
                <div className='input'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={data.name || ''}
                    placeholder={t('Your Name')}
                  />
                </div>
              </div>
            </div>

            <div className='form-field'>
              <label htmlFor='email'> {t('Your Email')} </label>
              <div className='input-icon'>
                <div className='icon'>
                  <InputEmailIcon />
                </div>
                <div className='input'>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={data.email || ''}
                    placeholder={t('Your Email')}
                  />
                </div>
              </div>
            </div>
            <div className='form-field'>
              <label htmlFor='phone'> {t('Phone')}</label>
              <div className='input-icon'>
                <div className='icon'>
                  <InputPhoneIcon />
                </div>
                <div className='input'>
                  <input
                    type='text'
                    id='phone'
                    name='contact'
                    onChange={handleChange}
                    value={data.contact || ''}
                    placeholder={t('Phone')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='right'>
            <div className='form-field'>
              <label htmlFor='message'> {t('Address')}</label>
              <textarea
                id='message'
                name='address'
                onChange={handleChange}
                value={data.address || ''}
                rows='100%'
              />
            </div>
          </div>

          <div className='bottom'>
            <button onClick={handleSubmit} type='submit' className='btn'>
              {t('Send Request')}
              {/* Send Request */}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
