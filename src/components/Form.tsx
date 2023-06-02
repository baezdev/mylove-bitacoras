'use client'

import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form'
import { InputForm } from './InputForm'

type Inputs = {
  imei: string
  iccid: string
}

export function Form () {
  const useFormMethods = useForm<Inputs>()
  const { handleSubmit } = useFormMethods

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm  
          type='number'
          name='imei'
          label='imei'
          placeholder='Deben ser 15 números'
        />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  )
}