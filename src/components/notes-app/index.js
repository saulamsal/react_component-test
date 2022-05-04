import React, { useState } from "react";
import "./index.css";

function NotesApp() {
  const [noteList, setItem] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [filter, setFilter] = useState("all");

  const addNoteToList = () => {
    if (title) {
      let newItem = {
        title,
        status,
      };
      setItem([...noteList, newItem]);
      setTitle("");
      setStatus("");
    }
  };

  const listProvider = () => {
    if (filter == "active") {
      return noteList.filter((item) => {
        return item.status.toLowerCase() === "active";
      });
    } else if (filter == "completed") {
      return noteList.filter((item) => {
        return item.status.toLowerCase() === "completed";
      });
    }
    return noteList;
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className="large mx-8"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          data-testid="input-note-status"
          type="text"
          className="large mx-8"
          placeholder="Note Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          className=""
          data-testid="submit-button"
          onClick={() => addNoteToList()}
        >
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={() => setFilter("all")}
          >
            All
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="activeButton"
            onClick={() => setFilter("active")}
          >
            Active
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="completedButton"
            onClick={() => setFilter("completed")}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="note-list" data-testid="noteList">
            {listProvider().map((item) => {
              return (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
