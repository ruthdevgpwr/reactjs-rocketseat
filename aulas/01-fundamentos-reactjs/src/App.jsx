import Header from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {

  return (
    <>
      < Header />
      <Post
        author="Ruth Dantas" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />
      <Post
        author="Emerson Bezerra" content="Post muito legal"
      />
    </>
  )
}