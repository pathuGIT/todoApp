import { useEffect, useState, useRef} from "react";
import NewTodo from "./components/NewTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [lists, setLists] = useState([]);
  const [btnTyp,setBtnTyp] = useState('ADD');
  const [item, setItem] = useState();
  const text = useRef('');
  const date = useRef('');

  useEffect(() => {
    console.log(lists);
  }, [lists]);

  return (
    <div className='App container border'>
      <p className="topic">Todo List</p>
      <div >
        <NewTodo list={lists} setLists={setLists} setBtnTyp={setBtnTyp} btnTyp={btnTyp} text={text} item={item} date={date}/>
        <ListTodo list={lists} setLists={setLists} setItem={setItem} setBtnTyp={setBtnTyp} btnTyp={btnTyp} text={text} date={date}/>
      </div>
    </div> 
  );
}

export default App;
