import * as S from './List.styles'
import {Item} from '../../types/Item'
import { useState } from 'react'

type ListProps ={
  item: Item
}
const ListItem = ({item}: ListProps) => {
  const [isChecked, setIsChecked] = useState(item.done)
  return (
   <S.WrapperList done={isChecked}>
    <input 
    type="checkbox"
    checked={isChecked}
    onChange={e => setIsChecked(e.target.checked)}
    />
    <label>{item.name}</label>
   </S.WrapperList>
  )
}
export default ListItem