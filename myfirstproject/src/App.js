import { Home } from "./components/pages/Home/Home"
import { Route, Routes } from 'react-router-dom'
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Header } from "./components/layouts/Header/Header";
import { UseState } from "./components/pages/UseState/UseState";
import { UseEffect } from "./components/pages/UseEffect/UseEffect";
import { UseCustom } from "./components/pages/UseCustom/UseCustom";
import { RickAndMorty } from "./components/pages/RickAndMorty/RickAndMorty";

function App() {
  return (
    <div className="app">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/UseState" element={<UseState></UseState>}></Route>
      <Route path="/UseCustom" element={<UseCustom></UseCustom>}></Route>
      <Route path="/UseEffect" element={<UseEffect></UseEffect>}></Route>
      <Route path="/RickAndMorty" element={<RickAndMorty></RickAndMorty>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}



export default App;