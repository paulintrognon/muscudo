import { NextPage } from 'next'
import LumbarToTheGround from '../components/Exercices/LumbarToTheGround'
import RaiseOpposingArmAndLeg from '../components/Exercices/RaiseOpposingArmAndLeg'
import Session from '../components/Sessions/Session'

const IndexPage: NextPage = () => {
  const exercices = [
    { duration: 3, component: <p>Get ready...</p> },
    { duration: 3, component: <LumbarToTheGround /> },
    { duration: 3, component: <RaiseOpposingArmAndLeg /> },
    { duration: Infinity, component: <p>Fin</p> },
  ]
  return (
    <>
      <Session exercices={exercices} />
    </>
  )
}
export default IndexPage
