import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'; // Import the icon

const NewTodo = (props) => {
    const lists = props.list;
    const setLists = props.setLists;
    const setBtnTyp = props.setBtnTyp;
    const text = props.text;
    const btnTyp = props.btnTyp;
    const item = props.item;
    const date = props.date;
    const dateInputRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const valueToList = text.current.value.trim();
        const valueToDate = date.current.value.trim();

        if(!valueToList){
          console.log("err");
          return;
        }
        
        switch(btnTyp){
          case 'ADD':
            setLists([...lists, {id:uuidv4(), name: valueToList, date: date.current.value}]);
            text.current.value = '';
            date.current.value = '';
            break;
  
          case 'EDIT':
            console.log('here')
            setLists(
              lists => lists.map((list)=>
                list.id === item ? {...list,name: valueToList, date: valueToDate} : list        
              )
            )
            text.current.value = '';
            date.current.value = '';
            setBtnTyp('ADD')     
        }
        
    }

    return (
        <div className='col mt-1'>
            <form onSubmit={handleSubmit}>
                <div className='row m-2'>
                    <input type="text" className="form-control mt-1" ref={text} required placeholder='what you want to do..'/>
                    <input type="date" className="form-control mt-1" ref={date} />
                </div>
                <div className='row m-2'>
                    <input type="submit" className="col btn btn-primary" value={btnTyp} />
                    <input type="reset" className="col btn btn-danger" onClick={()=>setLists([])} value="RESET" />
                </div>
            </form>
        </div>
    );
}

 
export default NewTodo;