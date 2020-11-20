import React from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks
const Categories = React.memo(function Categories({categories, onClickCategory, activeCategory}){

    return(
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={()=> onClickCategory(null)}>Все</li>
                { categories.map( (item, index) =>(
                    <li key={`${item}_${index}`}
                        onClick={()=> onClickCategory(index)}
                        className={ activeCategory === index ? 'active' : ''}
                    >{item}</li>
                ) )}
            </ul>
        </div>
    )
})

export default Categories;