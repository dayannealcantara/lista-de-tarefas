import * as S from './App.styles'
import { Item } from './types/Item';
import { useState } from 'react';
import ListItem from './Components/ListItem/ListItem';
import ListAdd from './Components/ListAdd/ListAdd';


const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id:1, name:'Correr as 6h', done: false},
    {id:2, name:'Tomar desjejum', done: false}
  ])

    const handleAdd = (taskName: string) =>{
      let newList = [...list];
      newList.push({
        id:list.length + 1,
        name:taskName,
        done:false
      });
      setList(newList)
    }

  return (
   <S.Container>
     <S.Wrapper>
       <S.Header>Minhas Tarefas</S.Header>
       <ListAdd onEnter={handleAdd}/>
       {list.map((item, index) =>(
        <ListItem key={index} item={item}/>
       ))}   
     </S.Wrapper>
   </S.Container>
  );
}

export default App;
