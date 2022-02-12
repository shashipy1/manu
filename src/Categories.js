import React from 'react';

const categories = ({ categories, filterItems }) => {
    return (
        <div className='btn-container'>
            {/* <button className='filter-btn' onClick={() => filterItems('all')}>
              all
          </button>
          <button className='filter-btn' onClick={() => filterItems('breakfast')}>
              breakfast
          </button> */}
            {categories.map((category, index) => {
                return (
                    <button type='button' className='filter-btn' key='index'
                        onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default categories;
