import React, { useReducer, useState } from "react";
import Todo_Second from "./Todo_Second";

// const INITIAL_STATE = [
//   {
//     id: 1,
//     name: "Dhaval",
//   },
// ];

const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADDTODO": {
      return [...state, payload];
    }

    case "EDITTODO": {
      return state.map((todo, index) => {
        index === payload.index ? { ...todo, name: payload.name } : todo;
      });
    }

    case "DELETODO": {
      return state.filter((todo) => todo.idx !== payload);
    }

    default:
      return state;
  }
};

const Todo_App = () => {
  const [DataAdd, dispatch] = useReducer(Reducer, []);

  const [inp, setInp] = useState("");

  // const [add, setAdd] = useState([]);

  const [edit, setEdit] = useState(null);

  const AddTodo = (newName) => {
    if (edit !== null) {
      // const updateData = [...add];

      dispatch({
        type: "EDITTODO",
        payload: { index: edit, name: inp },
      });

      // (updateData[edit].name = newName)

      // setAdd(updateData);
      setEdit(null);
    } else {
      // const TodoData = [...add, { name: newName }];
      // setAdd(TodoData);

      dispatch({ type: "ADDTODO", payload: { name: inp } });
    }

    setInp("");
  };

  const handleData = (e) => {
    setInp(e.target.value);
  };

  const buttonClick = () => {
    AddTodo(inp);
  };

  const handleDeleteData = (DataAdd) => {
    // const DataFill = add.filter((DeleteData) => DeleteData.name !== data);
    // setAdd(DataFill);

    dispatch({ type: "DELETODO", payload: DataAdd });

    // console.log(DataFill);
  };

  const handleEditeData = (index) => {
    setInp(DataAdd[index].name);
    setEdit(index);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex col-md-4 m-auto">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={inp}
            onChange={handleData}
          />

          <button
            className="btn btn-success"
            type="submit"
            onClick={buttonClick}
          >
            {edit !== null ? "Update" : "Add"}
          </button>
        </div>

        <Todo_Second
          AddTodoData={DataAdd}
          DeleteTodo={handleDeleteData}
          handleEditeData={handleEditeData}
        />
      </div>
    </>
  );
};

export default Todo_App;

// {add.length > 0 ? (
//   add.map((user, idx) => {
//     return (
//       <div className="col-md-4 m-auto" key={idx}>
//         <div className="input-user">
//           {user.name}

//           <button
//             className="btn btn-danger"
//             type="submit"
//             onClick={() => handleDeleteData(user.name)}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   })
// ) : (
//   <p>No Datat Found</p>
// )}
