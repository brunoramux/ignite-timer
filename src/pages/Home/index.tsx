import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, StopCountdownButton } from './styles'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  // criamos o padrao que queremos para validacao do formulario
  task: zod.string().min(1, 'Informe a tarefa'),
  time: zod
    .number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema> // extrai o tipo de dados do formulario sem o uso de interfaces. Poderiamos usar apenas o interface abaixo que funcionaria
// interface NewCycleFormData {
//   task: string,
//   time: number,
// }

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    // useForm e o hook para manipulacao de formularios no React. Register para extrair os campos dos formularios. handleSubmit e a funcao para acionamento
    resolver: zodResolver(newCycleFormValidationSchema), // validacao de formulario
    defaultValues: {
      task: '',
      time: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm // puxando os metodos do useForm que utilizaremos. handleSubmit para lidar com o submite do formulario. Watch para verificar em tempo real algum campo que queremos. Reset para reinicialiar o formulario

  const task = watch('task') // funcao usada para tornar o formulario controlled. Usamos ela para habilitar o botao

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <button disabled={!task} type="submit">
            <Play size={24} />
            Comecar
          </button>
        )}
      </form>
    </HomeContainer>
  )
}
