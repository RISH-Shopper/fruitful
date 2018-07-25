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
  console.log(props.categories)
  if (props.categories) {
  const categories = props.categories
	return (
		<div className="sidebar">
			<h2>CATEGORIES</h2>
			<ul>
				{categories.map(category => {
          const categoryLink = '/products/categories/' + category.id
          return (<Link to={categoryLink} key={category.id}> <h3>{category.title}</h3> </Link>)
        }
				)}
			</ul>
		</div>
  )
  } else {return 'loading categories'}
}

const mapStateToProps = (state) => {
	return state.categories
}

export default connect(mapStateToProps)(Sidebar)
