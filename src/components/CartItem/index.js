import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value

      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      const onIncrement = () => {
        incrementCartItemQuantity(id)
      }

      const onDecrement = () => {
        decrementCartItemQuantity(id)
      }

      const onRemove = () => {
        removeCartItem(id)
      }

      return (
        <li className="cart-item">
          <img src={imageUrl} alt={title} className="cart-product-image" />

          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>

            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={onDecrement}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>

              <p className="cart-quantity">{quantity}</p>

              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={onIncrement}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>

            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
            </div>
          </div>

          <button
            type="button"
            className="delete-button"
            data-testid="remove"
            onClick={onRemove}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
