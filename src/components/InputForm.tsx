import { useFormContext } from 'react-hook-form'

interface InputProps {
  label: string
  type: string
  name: string
  placeholder: string
}

const styles = {
  input: 'flex flex-col border-b-2 border-[#cac7e1] group focus-within:border-purple-500',
  label: 'uppercase text-gray-500 text-sm font-medium group-focus-within:text-purple-600'
}

export const InputForm: React.FC<InputProps> = (props) => {
  const { register } = useFormContext()

  const { label, type, name, placeholder } = props

  return (
    <div>
      <div className={styles.input}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input
          {...register(name)}
          {...props}
          type={type}
          id={name}
          placeholder={placeholder}
          autoComplete='off'
          className='py-[10px] outline-none text-lg appearance-none caret-purple-500 font-medium placeholder:text-gray-400 w-full bg-inherit h-12'
        />
      </div>
      {/* Error message */}
    </div>
  )
}

/* interface InputSelectProps extends InputProps {
  options: Array<string>
}

export const InputSelect: React.FC<InputSelectProps> = (props) => {
  const [field, meta] = useField(props)
  const { label, name, options, placeholder } = props
  return (
    <div>
      <div className={styles.input}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <select
          {...props}
          {...field}
          name={name}
          className='py-[10px] outline-none text-lg font-medium bg-inherit w-full h-12 capitalize'
          defaultValue=''
        >
          <option hidden>{placeholder}</option>
          {options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <InputError meta={meta} />
    </div>
  )
}

interface InputErrorProps {
  meta: FieldMetaProps<any>
}

export const InputError:React.FC<InputErrorProps> = ({ meta }) => {
  return (
    <span className='block mt-1 font-semibold text-red-500'>{meta.error}</span>
  )
} */