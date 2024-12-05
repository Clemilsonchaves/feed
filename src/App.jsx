/* eslint-disable react/jsx-key */
import  { Post } from './components/Post';
import { Header } from './components/Header'; 
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


// eslint-disable-next-line no-unused-vars
const posts = [
  {
    id: 1,
    author: { 
      name: 'Clemilson Chaves',
      avatarUrl: 'https://github.com/clemilsonchaves.png',
      role: 'Developer Web',
     },
      content: [
      { type: 'paragraph', content: 'Fala galera👋 ' }, 
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio🚀' },
      { type: 'link', content:  '@Clemilsonchaves DeveloperWeb'},
      
      ],
      publishedAt: new Date('2024-06-07 20:00:00'),
  },

    {
      id: 2,
      author: { 
      name: 'Aksa Carvalho',
      avatarUrl: 'https://github.com/aksacarvalho.png',
      role: 'Developer FrontEnd ', 
     },
      content: [
      { type: 'paragraph', content: 'Fala galera👋 ' }, 
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio🚀' },
      { type: 'link', content:  '@AksaCarvalho DeveloperWeb'},
      
      ],
      publishedAt: new Date('2024-06-12 20:30:00'),
    },
    
    
];


 export function App() {
  return (
    <div>
      <Header />

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
    </div>
    
  )
}


