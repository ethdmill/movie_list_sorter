import listToLowercase from './utils/lowercase'
import testList from './data/testList'

const App = () => {
  return (
    <div>
      <button onClick={() => listToLowercase(testList)}>lowercase</button>
      <div></div>
    </div>
  );
}

export default App;
