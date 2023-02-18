import Working from "./assets/undraw_working_re_ddwy.svg"
import Wave from "./assets/wave.svg";
import MainContent from "./components/MainContent";
import Welcoming  from "./components/Welcoming";

function App() {
  return (
    <div>
      <div className="main-box">
        <Welcoming/>
        <div class="welcoming-illustration">
              <img src={Working} alt="" />
        </div>
      </div>
      <img src={Wave} className="wave" alt=""/>
      <MainContent />
    </div>
  );
}

export default App;
