import { useState } from 'react'
import Exercice from '../Exercices/Exercice'

interface Props {
  exercices: {
    duration: number
    component: React.ReactNode
  }[]
}
const Session: React.FC<Props> = ({ exercices }) => {
  const [currentExercice, setCurrentExercice] = useState(0)
  const exercicesComponents = exercices.map((exercice, i) => (
    <Exercice key={i} duration={exercice.duration} onFinish={onExerciceFinish}>
      {exercice.component}
    </Exercice>
  ))

  function onExerciceFinish(): void {
    setCurrentExercice(currentExercice + 1)
  }

  return (
    <div>
      <p>{exercicesComponents[currentExercice]}</p>
    </div>
  )
}
export default Session
