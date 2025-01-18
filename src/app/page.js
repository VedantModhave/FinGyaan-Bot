import ChatComponent from "./components/ChatComponent";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="welcome-message" style={{ fontSize: 'var(--base-font-size)' }}>
        <span style={{ fontSize: 'var(--base-font-size)' }}>Welcome to</span> 
        <span className="gradient-text" style={{ fontSize: 'var(--base-font-size)' }}> FinBot</span>
      </h1>
      <ChatComponent />
    </div>
  );
}
