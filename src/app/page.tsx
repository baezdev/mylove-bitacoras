import { Form } from "@/components/Form";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <main className='flex flex-col w-11/12 mx-auto md:flex-row md:max-w-screen-xl'>
      <Welcome />
      <Form />
    </main>
  )
}
