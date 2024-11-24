import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'; 
import { Avatar } from './Avatar';
export function Comment() {   
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

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, Parabéns!! 👏👏</p>
        </div>

        <footer>
         <button>
          <ThumbsUp size={24} />
          Aplaudir <span>20</span>      
         </button>
        </footer>
      </div>

    </div>           
     
  )
}