import React from 'react';
import { connect } from 'react-redux';
import { formatMoney } from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import { placeOrder } from "../../actions";


class ShoppingCart extends React.Component {

    placeOrder = () => {
        this.props.placeOrder(this.props.totalPrice).then(resp => {
            this.props.history.push('/orders');
        });        
    }

    render() {
        return (
            <>
                <div className="container" style={{ paddingTop: '6rem' }}>
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Shipping cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {this.props.cartItemCount ? this.props.cartItems.map(cart => (
                                <CartItem key={cart.id} {...cart} img={cart.images[0]} />
                            )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1>}
                        </div>
                        <div className="card-footer">
                            <div className="pull-right" style={{ margin: '10px' }}>
                                <div className="pull-right" style={{ margin: '5px' }}>
                                    Total price: <b>{formatMoney(this.props.totalPrice)} $</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pull-right" style={{ margin: '10px' }}>{this.props.cartItemCount ?
                        <button onClick={this.placeOrder} className="btn btn-lg btn-outline-primary text-uppercase">
                            Place Order
                        </button>
                        : ''}
                    </div>
                </div>
            </>
        );
    }
};


const mapDispatchToProps = dispatch => {
    return {
        placeOrder: (totalPrice) => placeOrder(totalPrice, dispatch)
    }
};

const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
