import Header from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/ruthdevgpwr.png',
      name: 'Ruth Dantas',
      role: 'CTO @RocketSeat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da  Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-02-01')
  },
];

export function App() {

  return (
    <>
      < Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}