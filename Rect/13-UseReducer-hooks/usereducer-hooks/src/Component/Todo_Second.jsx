import React from "react";

function Todo_Second({ AddTodoData, DeleteTodo, handleEditeData }) {
  return (
    <>
      {AddTodoData.length > 0 ? (
        AddTodoData.map((user, idx) => {
          return (
            <div className="col-md-4 m-auto" key={idx}>
              <div className="input-user">
                {user.name}

                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => handleEditeData(idx)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={() => DeleteTodo(idx)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Datat Found</p>
      )}
    </>
  );
}

export default Todo_Second;
