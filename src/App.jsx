import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Settings, Add } from "@mui/icons-material/";
import "./App.css";
import Sidebar from './Pages/Sidebar'
import Navbar from './Pages/Navbar'
import Feed from './Pages/Feed'
import Rightbar from './Pages/Rightbar'

function App() {
  return (
    <>
      <div>
       <Stack direction='row' justifyContent={"space-evenly"} spacing={2}>
       <Sidebar/>
       <Feed/>
       <Rightbar/>
       </Stack>
       
      </div>
    </>
  );
}

export default App;
