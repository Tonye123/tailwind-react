import React from 'react';
import { useAppState } from '../AppContext'

import styled from 'styled-components'


const StyledList = styled.li`
    
    list-style: none;
    font-size: 1.2rem;
    margin: 5px;
    padding: 5px;
    background: #ccc;

`

export default function BookList({ completeList }) {
    let[state, dispatch ] = useAppState();
     let { toRead,completed } = state
    return (
        <div>
            <h1>{completeList ? 'Completed' : 'To Read'}</h1>
            <ul style={{padding:0}}>
                {!completeList &&
                 toRead.map((book, index)=> {
                     return (
                         <StyledList
                         key={index}
                         onClick={()=> {
                             dispatch({ type:"READ_BOOK", item: book })
                         }}>
                               {book} 
                         </StyledList>
                     )

                 })

                }
                {completeList &&
                 completed.map((book, index)=> {
                     return (
                         <StyledList
                         key={index}
                         onClick={()=> {
                             dispatch({ type:"UNREAD_BOOK", item: book})
                         }}>
                               {book} 
                         </StyledList>
                     )

                 })

                }
            </ul>
        </div>
    )
}