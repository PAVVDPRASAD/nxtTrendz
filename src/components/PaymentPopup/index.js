import {useState} from 'react'
import './index.css'

const PaymentPopup = props => {
  const {cartList, total} = props
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)

  const handlePaymentChange = event => {
    setSelectedPaymentMethod(event.target.value)
  }

  const handleConfirmOrder = () => {
    setSuccessMessage(true)
  }

  return (
    <div className="payment-popup-cont">
      {!successMessage ? (
        <div className="payment-popup-card">
          <h1>Payment Details</h1>
          <p className="payment-method-heading">Payment Methods</p>
          <div className="payment-method-list">
            <div>
              <input
                id="card"
                type="radio"
                value="Card"
                disabled
                onChange={handlePaymentChange}
              />
              <label className="payment-name" htmlFor="card">
                Card
              </label>
            </div>
            <div>
              <input
                id="NetBanking"
                type="radio"
                value="Net Banking"
                disabled
                onChange={handlePaymentChange}
              />
              <label className="payment-name" htmlFor="NetBanking">
                Net Banking
              </label>
            </div>
            <div>
              <input
                id="upi"
                type="radio"
                value="UPI"
                disabled
                onChange={handlePaymentChange}
              />
              <label className="payment-name" htmlFor="upi">
                UPI
              </label>
            </div>
            <div>
              <input
                id="wallet"
                type="radio"
                value="Wallet"
                disabled
                onChange={handlePaymentChange}
              />
              <label className="payment-name" htmlFor="wallet">
                Wallet
              </label>
            </div>
            <div>
              <input
                id="cod"
                type="radio"
                value="Cash On Delivery"
                onChange={handlePaymentChange}
              />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>
          <p className="payment-method-heading">Order Details:</p>
          <p>Quantity: {cartList.length}</p>
          <p>
            Total Price{' '}
            <span style={{fontWeight: 600, color: 'blue'}}>RS {total}/-</span>
          </p>
          <button
            className={
              selectedPaymentMethod === 'Cash On Delivery'
                ? 'confirm-order-btn'
                : 'confirm-order-btn confirm-order-btn1'
            }
            type="button"
            disabled={selectedPaymentMethod !== 'Cash On Delivery'}
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="success-message-cont">
          <p className="success-message">
            Your order has been placed successfully
          </p>
        </div>
      )}
    </div>
  )
}

export default PaymentPopup
