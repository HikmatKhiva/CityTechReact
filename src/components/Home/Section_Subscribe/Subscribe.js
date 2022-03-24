import React from 'react'
import Input from '../../../components/Ui/Input/Input'
import Button from "../../../components/Ui/Button/Button"
const Subscribe = () => {
  return (
    <section className='for-color__subscribe'>
      <div className='container  d-flex justify-content-between flex-wrap-wrap'>
        <h3>Subscribe To our newsletter</h3>
        <form className='subscribe-form'>
          <Input type="text" placeholder="...Search" />
          <Button>Search</Button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe