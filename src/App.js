import './App.css';
import VideoPlayer from './VideoPlayer';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <VideoPlayer src="test2.mp4" width="560" height="315" />
    </div>
  );
}

export default App;
