import { FormContainer, InputProjecName, InputTime } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../context/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <InputProjecName
        id="task"
        placeholder="De um nome para o seu projeto"
        {...register('task')} // faz a funcao de nome para o input
        disabled={!!activeCycle}
      />
      <label htmlFor="time">durante</label>
      <InputTime
        type="number"
        id="time"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('time', { valueAsNumber: true })} // faz a funcao de nome para o input
        disabled={!!activeCycle}
      />
      <label htmlFor="">minutos</label>
    </FormContainer>
  )
}
