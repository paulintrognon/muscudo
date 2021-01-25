import { useTimer } from 'use-timer'

interface Props {
  duration: number
  onFinish: () => void
}
const Exercice: React.FC<Props> = ({ duration, onFinish, children }) => {
  const { time, start, pause } = useTimer({
    autostart: true,
    initialTime: duration,
    timerType: 'DECREMENTAL',
    endTime: 0,
    onTimeOver: onFinish,
  })

  return (
    <div>
      {children}
      <div>{time}</div>
      <p>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
      </p>
    </div>
  )
}
export default Exercice
