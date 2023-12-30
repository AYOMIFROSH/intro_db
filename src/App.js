import React from "react";
import MyCarousel from "./slides";
import Present from "./component/present";
import ComparisonTable from "./component/tables";
import Content from "./component/content";
import Since from "./component/footer";

function App() {
  return (
    <div className="App">
      <Present/>
      <ComparisonTable/>
      <Content/>
      <MyCarousel/>
      <Since/>
    </div>
  );
}

export default App;
