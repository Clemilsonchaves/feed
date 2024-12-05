import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css'; 
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {   
  const [ likeCount, setLikeCount ] = useState(0);
 

  function handleDeleteComment(){
    onDeleteComment(content)
  } 
  
  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }
  
  return (
    <div className={styles.comment}>
      <Avatar  hasBorder={false} src="https://github.com/clemilsonchaves.png" alt="Foto do Clemilson Chaves" />
    

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}> 
              <strong>Clemilson Chaves</strong>
              <time title="07 de junho às 04:19h" dateTime="2024-06-07 04:18:30">Cerca de uma 1h atrás</time>  
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
         <button onClick={handleLikeComment}>
          <ThumbsUp size={24} />
          Aplaudir <span>{likeCount}</span>      
         </button>
        </footer>
      </div>

    </div>           
     
  )
}