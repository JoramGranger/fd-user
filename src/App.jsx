import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  useStoreWebsiteDataToLocalStorage();

  return <AppRoutes />;
}

export default App;
