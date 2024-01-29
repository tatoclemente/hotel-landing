import { Footer, Header } from "./components";
import EventsPage from "./pages/EventsPage";
import ServicesPage from "./pages/Services";
import SuggestionsPage from "./pages/Suggestions";


function App() {
  return (
    <main id="home" style={{maxWidth:'100vw'}}>
      <Header />

      <SuggestionsPage />

      <EventsPage />

      <ServicesPage />

      <Footer />
    </main>
  );
}

export default App;
