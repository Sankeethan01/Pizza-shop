import React from 'react'
import '../Styles/Menu.css'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../Components/MenuItem'

const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>
            Our Menu
        </h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key) => {
                return <MenuItem key={key}  name={menuItem.name} image={menuItem.image} price={menuItem.price}/>
            })}
        </div>
    </div>
  )
}

export default Menu