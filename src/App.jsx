import Banner from "components/Banner"
import Paragraph from "components/Paragraph"
import SectionModel from "components/SectionModel"
import Title from "components/Tittle"
import Cards from "components/Cards"
import SectionImage from "components/SectionImage"
import aline from 'assets/images/aline.png'
import Form from "components/Form"


function App() {


  return (
    <>
      <Banner/>

      <SectionModel id='porque-fazer-terapia' background="bg-psi-gray">
        <Title  size="medium"> Por que fazer terapia?</Title>

        <Paragraph space='mb-8'>
          Na correria do dia a dia, muitas vezes deixamos de cuidar do nosso bem-estar emocional. A terapia é uma jornada de autodescoberta e crescimento pessoal, proporcionando uma oportunidade única para enfrentar desafios, compreender pensamentos e emoções, além de desenvolver recursos internos para lidar com situações difíceis.
        </Paragraph>

        <Paragraph space='mb-8'>
            A terapia com a Psicóloga Aline Leite, especializada em Terapia Cognitiva Comportamental, é um espaço acolhedor e seguro para explorar suas questões mais profundas e trabalhar na construção de uma vida mais satisfatória e significativa.
        </Paragraph>

        <Paragraph>
          Descubra como a terapia pode melhorar sua qualidade de vida, relacionamentos e bem-estar emocional.
        </Paragraph>
      </SectionModel>

      <SectionModel id='tipos-de-atendimento' background="bg-psi-blue">
        <Title align='text-center' size="large"> Tipos de atendimento</Title>
        <Cards />
      </SectionModel>
      
      <SectionModel id='sobre' background="bg-psi-gray">
        <div className="psi-grid md:grid-cols-1 lg:grid-cols-2">
          <div>
            <Title align='text-center' size="medium"> Quem é Aline?</Title>
            
            <Paragraph space='mb-4'> 
              Aline Leite é uma psicóloga dedicada e altamente qualificada, com especialização em Terapia Cognitiva Comportamental. Sua paixão pelo trabalho com a saúde mental é evidente em cada interação com seus pacientes. Com anos de experiência, ela construiu uma reputação sólida como uma profissional empática e competente.
            </Paragraph>

            <Paragraph space='mb-4'> 
              Aline acredita que cada indivíduo é único, e é por isso que sua abordagem terapêutica é sempre personalizada para atender às necessidades específicas de cada cliente. Sua empatia genuína permite que ela compreenda as angústias e os desafios enfrentados por seus pacientes, criando um ambiente de acolhimento e compreensão.
            </Paragraph>

            <Paragraph> 
              Ao escolher a terapia com a Aline Leite, você estará confiando em uma profissional experiente, que valoriza a confidencialidade, respeita seus limites e está empenhada em oferecer o melhor atendimento possível para ajudá-lo a viver uma vida mais plena e significativa.
            </Paragraph>
          </div>

          <SectionImage src={aline}/>
        </div>

      </SectionModel>

      <SectionModel nospace id='formulario'>
        <div className="px-12 mb-8 md:mb-20"> 
          <h2 className="psi-title text-psi-white text-center mb-8 ">O início da sua jornada</h2>
          <Paragraph color="text-psi-white" className='text-center '> Me conta um pouco sobre você e vamos conversar</Paragraph>
        </div>
        <Form/>
      </SectionModel>
    </>
  )
}

export default App
