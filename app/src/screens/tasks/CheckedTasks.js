import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoList from '../../components/todo-list/TodoList'
import { filterCheckedTasks } from './CheckedTasksActions'

const CheckedTasks = (props) => {

    useEffect((item) => {
       /*simular o componentDidMount para carregar as 
       todos realizadas após renderizar */

       props.filterCheckedTasksList(item)

    }, []);

    return (
        <div className='row'>
            <div className='col-12'>
                <TodoList
                    toDos={props.taskList}
                />
            </div>
        </div>
    );
    
}

const mapStateToProps = (state, props) => {
    return {
        taskList: state.CheckedTasksReducer.taskList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterCheckedTasksList: (done) => dispatch(filterCheckedTasks(done))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckedTasks);