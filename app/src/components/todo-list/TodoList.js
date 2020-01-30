import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    margin-left: auto;
    margin-right: auto;
    max-width: 30vw !important;
`

const ListItem = styled.li`
    &.active {
        background-color: #E6A000 !important;
        border-color: #E6A000 !important;
    }

    &:hover {
        cursor: pointer;
    }
`

const DeleteTaskBtn = styled.button`
    background-color: #fc5b55 !important;
    color: #fff !important;
    font-size: 12px !important;

    &:active {
        background-color: #aa6764 !important;
        border-color: #aa6764 !important;
    }
    
    &:focus {
        outline: 0 !important;
    }
`

const TaskName = styled.span`
    ${props => props.active && `text-decoration: line-through;`}
`

export default React.memo(({ toDos, onSelectItem, onRemoveItem }) => {

    const selectElement = React.useCallback(task => event => {


        if (event.target.type !== 'button') {
            onSelectItem && onSelectItem(task)
        } else {
            onRemoveItem && onRemoveItem(task)
        }


    }, [])

    return (
        <div className="p-2">
            <List className="list-group">
                {
                    toDos && toDos.map((task, idx) => {
                        return <ListItem
                            className={`list-group-item ${task.done && 'active'}`}
                            key={idx}
                            onClick={selectElement(task)}
                        >
                            <div className="row">                               
                                <div className="col-9 d-flex align-items-center">
                                    <TaskName
                                        active={task.done}>
                                        {task.name}
                                    </TaskName>
                                </div>
                                <div
                                    className="col-3 d-flex align-items-center">
                                    <DeleteTaskBtn
                                        className="btn btn-sm mx-auto"
                                        onClick={selectElement(task)}
                                        type="button"
                                    >
                                        Excluir
                                    </DeleteTaskBtn>
                                </div>
                            </div>
                        </ListItem>
                    })
                }
            </List>
        </div>
    )
})