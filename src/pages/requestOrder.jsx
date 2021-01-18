import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectChatId } from '../store/chatLogSlice'
import InputNameIcon from '../images/input-name-icon'
import InputEmailIcon from '../images/input-email-icon'
import InputPhoneIcon from '../images/input-phone-icon'
import configure from '../config'

function RequestOrder(props) {
    const chatId = useSelector(selectChatId)
    const { t } = useTranslation()
    const [data, setData] = useState({uniq_session: chatId})
    
    useEffect(() => {
      if (chatId !== '') {
        fetchData()
      }
    }, [chatId])

    const fetchData = async () => {
      await axios.get(configure.kindly_api + chatId, {
           headers: {
             Authorization: `Bearer ${configure.token}`,
           },
         }).then(response => {
           let res_data = response.data;
           setChatData(res_data.chat.context);
         })
     }

    const setChatData = chatData => {
      
      if(typeof chatData === 'object')
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
        uniq_session: chatId || ''
      }))
    }


    const handleChange = ({ currentTarget: input }) => {
        // console.log(input.name, input.value)
        setData(prevState => ({
          ...prevState,
          [input.name]: input.value,
        }))
        // console.log(data)
      }

      
  const handleSubmit = e => {
    e.preventDefault()

    let submit_config = {
      method: 'post',
      url: configure.API_URL + 'make-request',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: JSON.stringify(data),
    }

    axios(submit_config)
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
         <div className={'container'}>
            <div className={'card card--cart','order_rq'}>
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
            </div>
         </div>
        </div>
    );
}

export default RequestOrder;