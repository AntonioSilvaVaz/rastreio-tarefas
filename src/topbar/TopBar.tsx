import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import './TopBar.css'
export function TopBar() {
  return (
    <section id="topbar" className="background-color">
      <div>
        <h1 className="text-color">Rastreio de Tarefas</h1>
      </div>
      <div className="icons-container">
        <BsFillMoonFill className="icon text-color" />
        <BsFillSunFill className="icon text-color" />
      </div>
    </section>
  )
};