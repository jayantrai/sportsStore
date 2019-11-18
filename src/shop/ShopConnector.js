import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../data/ActionCreators'
import { DataTypes } from '../data/Types'
import  Shop  from './Shop'
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from '../data/CartActionCreators.js'

// As the first argument passed in to connect, 
// mapStateToProps is used for selecting the part of the data from the store 
// that the connected component needs. It’s frequently referred to as just mapState for short.
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
    
    const mapStateToProps = (dataStore) => ({
        ...dataStore
    })

// As the second argument passed in to connect, 
// mapDispatchToProps is used for dispatching actions to the store.
// dispatch is a function of the Redux store. 
// You call store.dispatch to dispatch an action. 
// This is the only way to trigger a state change.

    const mapDispatchToProps = {
        loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
    }

    const filterProducts = (products = [], category ) => (
        !category || category === "All"
    ) ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase())

    export const ShopConnector = connect(mapStateToProps, mapDispatchToProps) (
        class extends Component {
            render() {
                return <Switch>
                            {/* passing render props to shop component with an inline function 
                            matches params based on category link
                            */}
                            <Route path='/shop/products/:category?'
                                render={ (routeProps) =>
                                    <Shop {...this.props } {...routeProps}
                                    products={filterProducts(this.props.products,
                                    routeProps.match.params.category)} />} />
                                <Redirect to="/shop/products" />
                        </Switch>
                    }


        componentDidMount() {
          this.props.loadData(DataTypes.CATEGORIES)
          this.props.loadData(DataTypes.PRODUCTS)
        }
         
                        
    }
    
)
    


export default ShopConnector


// connects the redux data store and the URL router to the shop component
// redux provides the connect function
// this is the point where the data store and the URL routing features are combined