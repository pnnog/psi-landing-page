import Banner from "components/Banner"
import Grid from "components/Grid"
import Paragraph from "components/Paragraph"
import SectionModel from "components/SectionModel"
import Title from "components/Tittle"
import Cards from "components/Cards"
import SectionImage from "components/SectionImage"

import happyWoman from 'assets/images/happy-woman.png'
import aline from 'assets/images/aline.png'


function App() {


  return (
    <>
      <Banner/>

      <SectionModel id='porque-fazer-terapia' color="bg-psi-gray">
        <Title align="text-center" size="medium"> Por que fazer terapia?</Title>

          <Grid> 
            <div>
              <Paragraph space='mb-8'>
                Na correria do dia a dia, muitas vezes deixamos de cuidar do nosso bem-estar emocional. A terapia é uma jornada de autodescoberta e crescimento pessoal, proporcionando uma oportunidade única para enfrentar desafios, compreender pensamentos e emoções, além de desenvolver recursos internos para lidar com situações difíceis.
              </Paragraph>

              <Paragraph space='mb-8'>
                  A terapia com a Psicóloga Aline Leite, especializada em Terapia Cognitiva Comportamental, é um espaço acolhedor e seguro para explorar suas questões mais profundas e trabalhar na construção de uma vida mais satisfatória e significativa.
              </Paragraph>

              <Paragraph >
                Descubra como a terapia pode melhorar sua qualidade de vida, relacionamentos e bem-estar emocional.
              </Paragraph>
            </div>
            <SectionImage src={happyWoman} alt='Mulher sorrindo olhando para o espelho'/>
          </Grid>

      </SectionModel>

      <SectionModel id='tipos-de-atendimento' color="bg-psi-blue">
        <Title align='text-center' size="medium"> Tipos de atendimento</Title>
        <Cards />
      </SectionModel>
      
      <SectionModel id='sobre' color="bg-psi-gray">
      <Title align='text-center' size="medium"> Quem é Aline?</Title>

        <Grid>
          <div>
            <Paragraph space='mb-8'> 
              Aline Leite é uma psicóloga dedicada e altamente qualificada, com especialização em Terapia Cognitiva Comportamental. Sua paixão pelo trabalho com a saúde mental é evidente em cada interação com seus pacientes. Com anos de experiência, ela construiu uma reputação sólida como uma profissional empática e competente.
            </Paragraph>

            <Paragraph space='mb-8'> 
              Aline acredita que cada indivíduo é único, e é por isso que sua abordagem terapêutica é sempre personalizada para atender às necessidades específicas de cada cliente. Sua empatia genuína permite que ela compreenda as angústias e os desafios enfrentados por seus pacientes, criando um ambiente de acolhimento e compreensão.
            </Paragraph>

            <Paragraph space='mb-8'> 
              Seu conhecimento aprofundado em Terapia Cognitiva Comportamental permite que ela ajude seus pacientes a identificar padrões de pensamentos negativos e comportamentos disfuncionais, trabalhando juntos para desenvolver estratégias eficazes para superar obstáculos e alcançar objetivos
            </Paragraph>

            <Paragraph> 
              Ao escolher a terapia com a Aline Leite, você estará confiando em uma profissional experiente, que valoriza a confidencialidade, respeita seus limites e está empenhada em oferecer o melhor atendimento possível para ajudá-lo a viver uma vida mais plena e significativa.
            </Paragraph>
          </div>

          <SectionImage src={aline}/>


        </Grid>


      </SectionModel>

      <SectionModel id='formulario' color="bg-psi-purple-300">
        <Title color="text-psi-white" align='text-center'> Agende sua consulta </Title>

        <form className="bg-psi-gray p-4 rounded-md ">

          <div className="m-4 flex flex-col gap-2 ">
            <label htmlFor="" >Nome</label>
            <input type="text"  placeholder="Digite seu nome" className="p-4 h-12 w-full"  />
          </div>

          <div className="m-4 flex flex-col gap-2">
            <label htmlFor="">Nome</label>
            <input type="text"  placeholder="Digite seu nome" className="p-4"  />
          </div>

          <div className="m-4 flex flex-col gap-2">
            <label htmlFor="" >Nome</label>
            <input type="text"  placeholder="Digite seu nome" className="p-4"  />
          </div>

        </form>
      </SectionModel>

    </>
  )
  ''
}

export default App
