import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { changeColor } from "../utilities/color";
import './TopBar.css'
export function TopBar() {

  return (
    <section id="topbar">
      <div>
        <h1 className="text-color">Rastreio de Tarefas</h1>
      </div>
      <div className="icons-container">
        <BsFillSunFill onClick={() => changeColor('light')} className="icon text-color pointer" />
        <h3 className="text-color">|</h3>
        <BsFillMoonFill onClick={() => changeColor('dark')} className="icon text-color pointer" />
      </div>
    </section>
  )
};