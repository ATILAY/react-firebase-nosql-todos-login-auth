import "./Todos.css";
import React, { useState } from "react";
import firebase,{auth, firestore, functions } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const addTodo = functions.httpsCallable("addTodo");
console.log(functions.httpsCallable("addTodo"))
const Todos = () => {
  const [todo, setTodo] = useState("");

  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

  //subscribe a query and changes any time that updated
  const [todos] = useCollectionData(todosRef, { idField: "id" });

  const signOut = () => auth.signOut();

  const onSubmitTodo = (event) => {
    event.preventDefault();
    console.log('firebase', firebase)
    setTodo("");
    addTodo({
      text: todo,
      complete: false,
      createdAt: firebase.firebase_.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <>
      <header className="header-todos-component">
        <button className="button-general" onClick={signOut}>Sign Out</button>
      </header>
      <main className="main-todos-component">
        <form className="form-todo" onSubmit={onSubmitTodo}>
          <input
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What's Next?"
            className="input-todo"
          />
          <button  className="button-general" type="submit">Add</button>
        </form>
        {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
      </main>
    </>
  );
};

const Todo = ({ id, complete, text }) => {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

  const onCompleteTodo = (id, complete) =>
    todosRef.doc(id).set({ complete: !complete }, { merge: true });

  const onDeleteTodo = (id) => todosRef.doc(id).delete();

  return (
    <div key={id} className="todo">
      <button
        className={`button-general todo-item ${complete ? "complete" : ""}`}
        tabIndex="0"
        onClick={() => onCompleteTodo(id, complete)}
      >
        {text}
      </button>
      <button onClick={() => onDeleteTodo(id)}>x</button>
    </div>
  );
};

export default Todos;