import React from 'react'
import Button from '@atlaskit/button'
import styled, {css} from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check-circle'

const ButtonStyled = styled(Button)`
    width: 100%;
    text-align: left;
    margin: 2px 0;

    &,
    &:hover {
        ${(p) => p.isCompleted && css`
            text-decoration: line-through;    
        `}
    }

    &,
    &:hover {
        .check-icon {
            display: inline-block;
        }
    }


    .check-icon {
        display: none;

        &:hover {
            border-radius: 50%;
            background-color: red;
        }
    }

`


export default function Todo({todo, onCheckBtnClick }) {
    return (
        <>
            <ButtonStyled
                isCompleted={todo.isCompleted}
                iconAfter={
                    !todo.isCompleted && (<span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
                        <CheckIcon primaryColor="lightgreen"/>
                    </span>)}
            >{todo.name}</ButtonStyled>
        </>
    );
}
