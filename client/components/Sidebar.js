import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectCategory} from '../store/category'
import Search from './Search'
import {search} from '../store/search'

class Sidebar extends Component {
  handleClick = event => {
    const categoryId = event.target.value
    this.props.selectCategory(categoryId)
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''
    this.props.resetSearch()
  }

  render() {
    if (this.props.categories) {
      const categories = this.props.categories

      return (
        <div className="nav flex-column">
          <h5 className="font-weight-bold">CATEGORIES</h5>
          <ul>
            {categories.map(category => {
              return (
                <div key={category.id}>
                  <button
                    type="button"
                    className="btn btn-primary-md"
                    value={category.id}
                    onClick={this.handleClick}
                  >
                    {category.title}
                  </button>
                </div>
              )
            })}
            <div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                value={null}
                onClick={this.handleClick}
              >
                View All
              </button>
            <hr />
            <div>
              <Search />
            </div>
            </div>
          </ul>
        </div>
      )
    } else {
      return 'loading categories'
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    selectedCategory: state.categories.selectedCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: categoryId => {
      dispatch(selectCategory(categoryId))
    },
    resetSearch: () => dispatch(search({query: '', products: []}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
