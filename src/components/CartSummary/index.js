import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (acc, eachItem) => acc + eachItem.price * eachItem.quantity,
        0,
      )

      const totalItems = cartList.reduce(
        (acc, eachItem) => acc + eachItem.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total:{' '}
            <span className="total-amount">Rs {totalAmount}/-</span>
          </h1>

          <p className="total-items">
            {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in cart
          </p>

          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
