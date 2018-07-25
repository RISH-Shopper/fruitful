import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import selectCategory from '../store/category'

const categoryDummyData = [
  {id: 1,
  title: 'Yellow',
  description: 'I am Yellow',
  },
  {id: 2,
  title: 'Purple',
  description: 'I am Purple',
  },
  {id: 3,
  title: 'Red',
  description: 'I am Red',
  },
  {id: 4,
  title: 'Orange',
  description: 'I am Orange',
  },
]

const dummyFunction = (event) => {
  const categoryId = event.target.value
  console.log('You have selected ',categoryId)
  }

const Sidebar = props => {
  console.log(props)
  if (props.categories) {
  const categories = props.categories

	return (
		<div className="sidebar">
			<h2>CATEGORIES</h2>
			<ul>
				{categories.map(category => {
          return (<div key={category.id}><button type="button" value={category.id} onClick={dummyFunction}>{category.title}</button></div>)
        }
        )}
      <hr/>
      <div><button type="button" value={null} onClick={dummyFunction}>View All</button></div>
			</ul>
		</div>
  )
  } else {return 'loading categories'}
}

const mapStateToProps = (state) => {
	return {
    categories: state.categories.categories,
    selectedCategory: state.categories.selectedCategory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: categoryId => dispatch(selectCategory(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
