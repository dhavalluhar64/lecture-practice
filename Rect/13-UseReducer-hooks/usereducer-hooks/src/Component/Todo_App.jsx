import React, { useReducer, useState } from "react";
import Todo_Second from "./Todo_Second";

// const INITIAL_STATE = [
//   {
//     id: 1,
//     name: "Dhaval",
//   },
// ];

const DataSave = () => {
  const saved = localStorage.getItem("Addtodo");
  return saved ? JSON.parse(saved) : [];
};

const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADDTODO": {
      let datastore = [...state, payload];

      localStorage.setItem("cart", JSON.stringify(state));

      return datastore;
    }

    case "EDITTODO": {
      let dataEdit = state.map((todo, index) =>
        index === payload.index ? { ...todo, name: payload.name } : todo
      );

      localStorage.setItem("cart", JSON.stringify(dataEdit));

      return dataEdit;
    }

    case "DELETODO": {
      let deleteData = state.filter((_, index) => index !== payload);

      localStorage.setItem("cart", JSON.stringify(deleteData));

      return deleteData;
    }

    default:
      return state;
  }
};

const Todo_App = () => {
  const [DataAdd, dispatch] = useReducer(Reducer, DataSave());

  const [inp, setInp] = useState("");

  const [edit, setEdit] = useState(null);

  const handleData = (e) => {
    setInp(e.target.value);
  };

  const buttonClick = () => {
    if (inp.trim() === "") {
      alert("Please enter a valid todo ");

      return;
    } else if (edit !== null) {
      dispatch({
        type: "EDITTODO",

        payload: { index: edit, name: inp },
      });

      setEdit(null);
    } else {
      dispatch({ type: "ADDTODO", payload: { name: inp } });
    }

    setInp("");
  };

  const handleDeleteData = (index) => {
    dispatch({ type: "DELETODO", payload: index });
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
