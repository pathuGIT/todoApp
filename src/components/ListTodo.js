import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ListTodo = (props) => {
    const lists = props.list;
    const setLists = props.setLists;
    const text = props.text;
    const setBtnTyp = props.setBtnTyp;
    const setItem = props.setItem;
    const date = props.date;

    const handleDelete = (id)=>{
        setLists(lists.filter((list)=>list.id != id))
    }
    
    const handleEdit = (item)=>{
        text.current.value = item.name;
        date.current.value = item.date;

        setBtnTyp('EDIT')
        setItem(item.id)
    }

    return (
        <div className="table-center">
            <div >
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Target Date</th>      
                        <th></th>
                        <th></th>        
                    </tr>
                </thead>
                <tbody>
                    {lists.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td> <FontAwesomeIcon icon={faPenToSquare} onClick={()=>handleEdit(item)} /> </td>
                            <td> <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(item.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
    );
}
 
export default ListTodo;