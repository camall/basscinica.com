import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Mixcloud from '../public/mixcloud.svg'
import Youtube from '../public/youtube.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basscinica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <video loop autoplay="true" playsinline="true" muted src="animationshort.mp4" className="animacija"/>
      </main>

      <footer>
        <a href="https://www.instagram.com/basscinica"><Instagram className="ikonica"/></a>
        <a href="https://www.mixcloud.com/basscinica/"><Mixcloud/></a>
        <a href="#"><Facebook/></a>
        <a href="#"><Youtube/></a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          display: flex;
          position: absolute;
          height: auto;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .ikonica {
          height: 36px;
          color: 'yellow';
        }

        .animacija {
          max-height: 90vh;
          max-width: 100%;
        }

        footer {
          position: absolute;
          bottom: 30px;

          a {
            display: flex;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}