import Livros from '@/util/books';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      {Livros.map((item, index) => (
        <>
          {item.estoque >= 1 ?
            <div className={styles.eachItem}>
              {item.estado == 'Novo' ?
                <div className={styles.estado} style={{ width: '50%', height: '18px', backgroundColor: 'rgb(121, 251, 121) ', color: 'black', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.estado}</div>
                :
                item.estado == 'Usado' ?
                  <div className={styles.estado} style={{ width: '50%', height: '18px', backgroundColor: 'rgb(236, 231, 61)', color: 'black', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.estado}</div>
                  :
                  ''
              }
              <img src={item.img} alt="" className={styles.eachBookImg} />
              <div className={styles.title}>{item.nome}</div>
              <div className={styles.autor}>{item.autor}</div>
              <div className={styles.precoArea}>
                <div className={styles.precoOff}>R$ {item.precoOff},00</div>
                <div className={styles.preco}>por R$ {item.preco},00</div>
              </div>
              <a href={`https://wa.me/5521969703202?text=Olá gostaria de saber sobre o livro: ${item.nome}`} target='_blank' className={styles.zapButton}>
                <div className={styles.zapButton}>
                  <img src="zap.png" alt="" className={styles.zapImg} />
                  <div>Mensagem</div>
                </div>
              </a>
            </div>
            :
            ''
          }
        </>
      ))}
    </div>
  )
}

export default Home;