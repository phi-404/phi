import CountdownTimer from "@/components/CountdownTimer";
import styles from "./page.module.css";


const [year,month,day,hours,minutes,seconds,ms] = [2000,6,29,1,9,0,0]
const initialLvl = new Date(year,month,day,hours,minutes,seconds,ms)
initialLvl.setTime(initialLvl.getTime() - 330 * 60000);


export default function Home() {
  const calculateCountDown = ():[Date,number] =>{
      const currDatetime = new Date()
      currDatetime.setTime(currDatetime.getTime() - 330 * 60000);
      const currYear = currDatetime.getFullYear()

      let countdownDate = new Date(currYear,month,day,hours,minutes,seconds,ms)
      countdownDate.setTime(countdownDate.getTime() - 330 * 60000);

      if(countdownDate < currDatetime){
        countdownDate = new Date(currYear+1,month,day,hours,minutes,seconds,ms)
        countdownDate.setTime(countdownDate.getTime() - 330 * 60000);
      }
      const lvl = new Date(currDatetime.getTime() - initialLvl.getTime()).getFullYear() - 1970
      return [countdownDate,lvl]
  }
  return (
    <main className={styles.main}>
        <CountdownTimer
          deadline={calculateCountDown()[0]}
          lvl={calculateCountDown()[1]}
          title={'Cease to Exist in '}
        />
    </main>
  );
}
