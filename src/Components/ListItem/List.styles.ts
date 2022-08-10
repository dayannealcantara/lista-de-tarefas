import styled from "styled-components";
type WrapperProps ={
  done:boolean
}

export const WrapperList = styled.div(({done}: WrapperProps) =>(
  `
  display:flex;
  background-color:#20212C;
  padding:10px;
  border-radius:10px;
  margin-bottom:10px;
  align-items:center;
  
  input{
    width:25px;
    height:25px;
    margin-right:10px;
  } 
  label{
    color:#fff;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }  
`
))
 
