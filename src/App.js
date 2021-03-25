import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import Animals from './components/Animals';

function App() {
  return (
    <div className="ui inverted orange menu">
      <a className="item">
        <h2>
          <i className="paw icon"></i>
          <div className="content">
          Zoo Keeper
          </div>
        </h2>
      </a>

      <div>
        <Animals />
      </div>
    </div>
  );
}

export default App;
