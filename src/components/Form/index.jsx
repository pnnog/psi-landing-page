import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import { TextField } from 'components/TextField';
import { Button } from 'components/UI/Button';
import { sendEmail } from 'services/sendEmail';

const Form = () => {

  const formSchema = z.object({
    name: z.string(),
    phone: z.string().min(4, 'Informe um número de telefone válido'),
    email: z.string().email('Informe um e-mail válido'),
    message: z.string().min(1, 'Deixe uma mensagem')
  });

  const {handleSubmit, formState:{errors}, register} = useForm({
    mode:'all',
    defaultValues:{
      name:'',
      phone:'',
      email:'',
      message:''
    },
    resolver: zodResolver(formSchema)
  });

  const handleFormSubmit = async (data) => {
    try {
      const response = await toast.promise(sendEmail(data), {
        pending:'Enviando e-mail',
        success:'E-mail enviado com sucesso',
        error:'Não foi possível enviar o e-mail'
      });
      console.log(response);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return(
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-psi-gray p-12 md:rounded-md mx-auto ">
      <div className='flex flex-col gap-4 mb-4 '>
        <TextField placeholder='Nome' fullWidth {...register('name')} error={!!errors?.name} helperText={errors?.name?.message}/>
        <TextField minLength={8} placeholder='Telefone (WhatsApp)' fullWidth  {...register('phone')} error={!!errors?.phone} helperText={errors?.phone?.message}   />
        <TextField placeholder='Email' type="email" fullWidth {...register('email')} error={!!errors?.email}  helperText={errors?.email?.message}/>
        <TextField multiline rows={5} placeholder='Deixe sua mensagem aqui'  fullWidth {...register('message')} error={!!errors?.message}  helperText={errors?.message?.message} />
      </div>

      <div className='flex justify-center'>
        <Button type='submit'>Enviar</Button>
      </div>

    </form>
  );
};

export default Form;
