const env = {
  serviceID : import.meta.env.VITE_SERVICE_ID,
  templateID : import.meta.env.VITE_TEMPLATE_ID,
  publicKey : import.meta.env.VITE_PUBLIC_KEY
}


export const getEnv = (envVar) =>{
  const internalVar = env[envVar]

  if(typeof internalVar === 'undefined'){
    throw new Error(`You must define ${envVar} environment variable before using it`)
  }

  return internalVar
}


