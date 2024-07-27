import CountdownTimer from "@/components/CountdownTimer";
import styles from "./page.module.css";

const currYear = new Date().getFullYear()
const countdownDate = new Date(currYear+1,3,1)
countdownDate.setTime(countdownDate.getTime() - 330 * 60000);
export default function Home() {
  return (
    <main className={styles.main}>
        <CountdownTimer
          deadline={countdownDate}
          lvl={currYear-2000}
          title={'Cease to Exist in '}
        />
    </main>
  );
}
