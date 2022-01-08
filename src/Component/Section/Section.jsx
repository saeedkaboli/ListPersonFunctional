import React from "react";
import SimpleContext from "./../../Context/Context";

const Section = ({ EventHdie, State, Set, Showitem, EventAdding }) => {
  const Context = React.useContext(SimpleContext);
  const HandlerDelete = (id) => {
    const Data = State.filter((Person) => id !== Person.id);
    Set(Data);
  };
  const HandlerChanging = (even, id) => {
    const Change = State.find((Data) => Data.id === id);
    Change.name = even.target.value;
    Set([...State]);
  };
  console.log(Context);
  return (
    <div className="Section">
      <div className="Section-Container">
        <div className="Section-Row">
          <div id="List">
            <ul id="List_Ul">
              <li id="List-Part-Up" className="pt-4">
                <div className="p-3">
                  <h6>
                    داخل لیست{" "}
                    {State.length === 0 ? (
                      <b className="badge badge-danger">{State.length}</b>
                    ) : State.length === 1 ? (
                      <b className="badge badge-danger">{State.length}</b>
                    ) : State.length === 2 ? (
                      <b className="badge badge-warning">{State.length}</b>
                    ) : (
                      <b className="badge badge-success">{State.length}</b>
                    )}{" "}
                    عضو هستند
                  </h6>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    style={{ direction: "rtl" }}
                    id="Input"
                  />
                </div>
                <span>
                  <button className="btn btn-success m-5" onClick={Context.EventAdd}>
                    اضافه کردن
                  </button>
                </span>
                <span>
                  <button className="btn btn-warning m-5" onClick={Context.EventHide}>
                    پنهان کردن
                  </button>
                </span>
              </li>
              <li id="List-Part-Down">
                {Showitem ? (
                  <div id="ListPersons">
                    {State.map((Person) => (
                      <div className="itemPersons" id={`${Person.id}`}>
                        <div> {Person.name}</div>
                        <div
                          onChange={(even) => HandlerChanging(even, Person.id)}
                        >
                          <input
                            type="text"
                            className="form-control ChangeInput"
                            id={Person.id}
                            placeholder={Person.name}
                          />
                        </div>
                        <div>
                          <i
                            id="DeleteTrash"
                            className="bi bi-trash"
                            onClick={() => {
                              HandlerDelete(Person.id);
                            }}
                          ></i>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
