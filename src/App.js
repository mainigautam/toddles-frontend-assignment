import React , {useState,useEffect} from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import TabSection from "./Components/TabSection";
import MockDB from './MockDB/MockDB.json'
import './Styles/App.css'
function App() {
  const [list,setList] = useState(MockDB);
  const [dummyUpdate,setDummyUpdate] = useState(false);
  const handleRender = () => {
    setDummyUpdate(!dummyUpdate);
  };
  useEffect(()=>{

  },[dummyUpdate])
  return (
    <>
      <Header data={list} setList={setList}/>
      <Profile data={list} setList={setList}/>
      <TabSection data={list} setList={setList} handleRender={handleRender}/>
    </>
  );
}

export default App;
