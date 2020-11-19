import React from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks
const Categories = React.memo(function Categories({categories, onClick}){

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) =>{
        setActiveItem(index)
        onClick(index)
    }

    return(
        <div className="categories">
            <ul>
                { categories.map( (item, index) =>(
                    <li key={`${item}_${index}`}
                        onClick={()=> onSelectItem(index)}
                        className={ activeItem === index ? 'active' : ''}
                    >{item}</li>
                ) )}
            </ul>
        </div>
    )
})

export default Categories;