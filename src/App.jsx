import React from "react";
import AddItem from "./components/AddItem";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";

const App = () => {
  //! Todays date
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return (
    <div>
      <Navbar />
      <section className="w-screen h-[200px] flex items-center justify-center bg-blue-100/80">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium">
            ({new Date().toLocaleDateString("en-us", options)})
          </h1>
          <button
            className="btn btn-primary text-lg"
            onClick={() =>
              (document.getElementById("my-modal-3").checked = true)
            }
          >
            Create TODO
          </button>
          <AddItem />
        </div>
      </section>
      <main className="w-11/12 mx-auto p-10">
        <Todolist />
      </main>
    </div>
  );
};

export default App;
