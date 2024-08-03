import React, {useState} from 'react';
import InputForm from "./components/input/InputForm";
import Output from "./components/output/Output";


function App() {

  const [data, changedData] = useState([])

  
  // console.log('app updated');
  // console.log(data);
  // console.log(data);
  
  function changingData(newData){
    if(newData[1]==='add') changedData(prevData=>{return [newData[0], ...prevData]});
    else if(newData[1]==='remove'){
      return changedData([...newData[0]])
    } 
  }
  
  return (
    <>
      <InputForm changingData={changingData}/>
      <Output changingData={changingData} data={data}/>
    </>
  );
}

export default App;
