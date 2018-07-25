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
  const categories = categoryDummyData
  // const categories = props.categories
	console.log('categories', categories);
	return categories? (
		<div>
			<h1>CATEGORIES</h1>
			<ul>
				{categories.map(category => (
					<h3 key={category.id}>{category.name}</h3>
				))}
			</ul>
		</div>
	) : null
}

const mapStateToProps = (state) => {
	return state.categories
}

export default connect(mapStateToProps)(Sidebar)
