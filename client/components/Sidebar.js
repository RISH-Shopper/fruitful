import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

const Sidebar = props => {
  // const categories = categoryDummyData
  console.log(props.categories)
  const categories = props.categories
	return categories.length > 0 ? (
		<div>
			<h1>CATEGORIES</h1>
			<ul>
				{categories.map(category => {
          const categoryLink = '/products/categories/' + category.id
          return (<Link to={categoryLink} key={category.id}> <h3>{category.title}</h3> </Link>)
        }
				)}
			</ul>
		</div>
	) : null
}

const mapStateToProps = (state) => {
	return {categories: state.categories}
}

export default connect(mapStateToProps)(Sidebar)
