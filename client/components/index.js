/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export { default as Products } from './Products'
export { default as SingleProduct } from './SingleProduct'
export { default as Sidebar } from './Sidebar'
export { default as AddProduct } from './AddProduct'
export { default as EditProduct } from './EditProduct'
export { default as Cart } from './Cart'
export { default as Checkout } from './Checkout'
export { default as AllOrders } from './AllOrders'
export { default as SingleOrder } from './SingleOrder'
export { default as Analytics } from './Analytics'
export { default as ChartOrders } from './ChartOrders'
export { default as ChartProducts } from './ChartProducts'
export { default as ChartUsers } from './ChartUsers'
export { default as OrderHistory } from './OrderHistory'
export { default as PromptCheckout } from './PromptCheckout'
export { default as FruitFriends } from './FruitFriends'
export { default as LogoutConfirmation } from './LogoutConfirmation'
