import HomePage from "./pages/Home";
import ErrorBoundry from './utils/ErrorBoundry';

import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <HomePage />
      </ErrorBoundry>
    </div>
  );
}

export default App;
