import MainPages from "../components/pages/MainPages";
import phoneitem from "../components/phone-item/phoneitem";
import Header from "../components/headers/Header";
import PhoneCover from "../components/PhoneCover/PhoneCover"


function App() {
  return (
    <div >
      <MainPages/>
      <phoneitem/>
      <Header/>
      <PhoneCover/>
    </div>
  );
}

export default App;
