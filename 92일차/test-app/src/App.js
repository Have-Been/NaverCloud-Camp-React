import logo from './logo.svg';
import './App.css';
import Test, {add} from './Test';

function App() {
  return (
    // 항상 부모태그로 묶어주어야 함, <>는 <div> 와 같은 역할이기 때문에 <div>로 주어도 무방
    <>
      <p>비트캠프</p>
      <Test/>
    </>
  );
}

export default App;
