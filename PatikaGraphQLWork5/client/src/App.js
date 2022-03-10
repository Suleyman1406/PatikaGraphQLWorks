import Header from "./components/Header";
import 'antd/dist/antd.less';
import AddSection from "./components/AddSection";
import ListSection from "./components/ListSection";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import EventDetail from "./components/EventDetail";
function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={< >
        <Header title='Event Sync'/>
        <AddSection/>
        <ListSection/>
      </>}/>
      <Route path="/detail:id" element={< >
        <Header title='Event Detail'/>
        <EventDetail/>
      </>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
