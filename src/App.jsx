import './reset.css';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Video_details from './components/Video_details/Video_details';
import Comments_form from './components/Comments_form/Comments_form';
import Video_comments from './components/Video_comments/Video_comments';
import Video_list from './components/Video_list/Video_list';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Video_details />
      <Comments_form />
      <Video_comments />
      <Video_list />
    </div>
  );
}

export default App;
