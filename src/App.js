
import ScrollToTop from "./components/scrollToTop";
import ContactBar from "./components/topBar";
import Home from "./pages/home";
import ScrollDetector from "./utils/scrolldetector";

function App() {
  return (
    <div className="App">
       <ScrollDetector>{visible => <ContactBar visible={visible} />}</ScrollDetector>
      <ScrollToTop />
      <Home />
   
    </div>
  );
}

export default App;
