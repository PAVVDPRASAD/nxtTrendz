import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.quantity * item.price
      })
      return (
        <div className="cart-ummary-cont">
          <h1 className="cart-summary-heading">
            Order Total: <span className="span-heading">Rs {total}/-</span>
          </h1>
          <p className="cart-summary-para">{cartList.length} items in cart</p>

          <Popup
            modal
            trigger={
              <button type="button" className="checkout-btn">
                Checkout
              </button>
            }
            closeOnDocumentClick
          >
            {close => (
              <>
                <PaymentPopup cartList={cartList} total={total} />
                <button type="button" onClick={() => close()}>
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
