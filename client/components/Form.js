import React from 'react'

const Form = (props) => {
  return (
    <form>
      <div>
        <div>
          <label htmlFor='form'>Name</label>
          <div>
            <input
              type='text'
              name='title'
              defaultValue={props.title}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='form'>Description</label>
          <div>
            <input
              type='text'
              name='description'
              defaultValue={props.description}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='form'>Price</label>
          <div>
            <input
              type='text'
              name='price'
              defaultValue={props.price}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='form'>Inventory</label>
          <div>
            <input
              type='text'
              name='inventory'
              defaultValue={props.inventory}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='form'>Image</label>
          <div>
            <input
              type='text'
              name='photo'
              defaultValue={props.photo}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <span>
          <button type='submit'>Submit</button>
        </span>
      </div>
    </form>
  )
}

export default Form
