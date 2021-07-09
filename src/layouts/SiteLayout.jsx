import React,{ useEffect } from 'react';
import { fetchAllTodo } from './../redux/actions/todo.action';
import { remove } from './../redux/slices/todo.slice'
import { useDispatch,useSelector } from 'react-redux';

const SiteLayout = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(fetchAllTodo())
    },[]);

    const onRemoveTodo = async(id) => {
        await fetch(`https://6006daa53698a80017de20ff.mockapi.io/todos/${id}`,{
            method : 'DELETE'
        }).then(data => data.json());
        dispatch(remove(id))
    }

    return (
        <div>
            {todos.isFetching && 'loading.......'}
            {todos.list.map(item => {
                return <div>
                    <p>{item.name}</p>
                    <button onClick={() => onRemoveTodo(item.id)}>Xóa</button>
                </div>
            })}
        </div>
    );
};

export default SiteLayout;