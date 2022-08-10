import { KeyboardEvent, useState } from 'react'
import * as S from './ListAdd.styles'

type ListAddProps={
  onEnter: (taskName: string) =>void
}

 const ListAdd = ({onEnter}: ListAddProps) => {
const [inputText, setInputText] = useState("")

const handleKeyUp =(e: KeyboardEvent) => {
  if(e.code === 'Enter' && inputText !== '') {
    onEnter(inputText)
    setInputText('')
  }
}

  return (
   <S.WrapperListAdd>
     <div className='image'>➕</div>
     <input 
     type="text"
     placeholder='Adicione uma tarefa'
     value={inputText}
     onChange={e => setInputText(e.target.value)}
     onKeyUp={handleKeyUp}
      />
   </S.WrapperListAdd>
  )
}
export default ListAdd