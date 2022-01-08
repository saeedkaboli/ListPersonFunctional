import React from "react";

//------Impoer Extra Component
import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";
import Footer from "./Component/Footer/Footer";
import SimpleContext from './Context/Context';
//------Import Extra Css

const App = () => {
  // ------------------------------This is One State
  const [state, Setstate] = React.useState([
    // { name: "سعید کابلی", id: 1 },
    // { name: "علی سلطانیه", id: 2 },
    // { name: "حسین دانه کار", id: 3 }
  ]);
  //-------------------------------This is Two Statw
  const [Show, UnShow] = React.useState(true);
  /*
  
  The All EVENT Down is Method For Performance this App
  
  */
  const HandlerHide = () => {
    UnShow(!Show);
    console.log(Show);
  };
  const HandlerAdd = () => {
    const Input = document.getElementById("Input").value;
    if (Input === "" || isNaN(Input) === false) {
      alert("Erorr");
    } else {
      Setstate([...state, { name: Input, id: state.length + 1 }]);
    }
  };

  return (
    <SimpleContext.Provider value={{state:state,setState:Setstate,show:Show,unShow:UnShow,EventHide:HandlerHide,EventAdd:HandlerAdd}}>
    <div className="App">
      {/* This is Header Component */}
      <Header TitleHeader={`لیست اسامی اشخاص با فانکشنال کامپوننت`} />
      {/* this is Section Component */}
      <Section
        EventHdie={HandlerHide}
        EventAdding={HandlerAdd}
        State={state}
        Showitem={Show}
        Set={Setstate}
      />
      {/* this is Footer Component */}
      <Footer />
    </div>
    </SimpleContext.Provider>
  );
};
export default App;
