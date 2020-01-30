import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import TodoList from '../../components/todo-list/TodoList'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { addTaskToList, toggleTask, deleteTask } from './TasksActions'

const Tasks = (props) => {

    const [taskName, setTaskName] = useState('');

    useEffect(() => console.log('props', props), []);

    return (
        <div className='row'>

            <Button
                btnOnClick={() => {
                    props.addNewTask(taskName)
                    setTaskName('')
                }}>Inserir
            </Button>

            <Input
                inputValue={taskName}
                onChangeHandler={(e) => setTaskName(e.target.value)}
            />

            <div className='col-12'>
                <TodoList
                    toDos={props.taskList}
                    onSelectItem={(item) => console.log('Tarefa selecionada:', item)}
                    onRemoveItem={(item) => {
                        props.deleteTaskFromList(item.id);
                        console.log('Tarefa deletada:', item);
                    }}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        taskList: state.TasksReducer.taskList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addNewTask: (name) => dispatch(addTaskToList(name)),
        toogleTaskFlag: (id) => dispatch(toggleTask(id)),
        deleteTaskFromList: (id) => dispatch(deleteTask(id)),

    }
}

// export default connect(mapStateToProps, null)(Tasks);
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);