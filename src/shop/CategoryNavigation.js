import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ToggleLink  from '../ToggleLink.js'

class CategoryNavigation extends Component {
  render() {
    return <React.Fragment>
        {/* <Link className="btn btn-secondary btn-block" to={ this.props.baseUrl}>
        All
        </Link> */}

        <ToggleLink to={ this.props.baseUrl} exact={ true }>
        All
        </ToggleLink>

        {/* maps categories to be displayed  */}

        {/* { this.props.categories && this.props.categories.map(cat =>
        <Link className="btn btn-secondary btn-block" key={ cat }
        to={ `${this.props.baseUrl}/ ${cat.toLowerCase()}`}>
        {cat}
        </Link>
        )} */}

        { this.props.categories && this.props.categories.map(cat =>
        <ToggleLink  key={ cat }
        to={ `${this.props.baseUrl}/ ${cat.toLowerCase()}`}>
        {cat}
        </ToggleLink>

        )}

     </React.Fragment>
    
  }
}

export default CategoryNavigation

// this.props.baseUrl, the browser navigates to a new url without sending any http request 
// the details included in the new url such as category allow different parts of the application 
// to work together