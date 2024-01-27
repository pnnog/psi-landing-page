import Banner from 'components/Banner';
import SectionModel from 'components/SectionModel';
import Cards from 'components/Cards';
import aline from 'assets/images/aline.png';
import woman from 'assets/images/woman.jpg';
import Form from 'components/Form';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Testimonials from 'components/Testimonials';
import { grid, paragraph, title } from 'components/UI';
import WhatsAppLink from 'components/WhatsAppLink';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SectionModel id="porque-fazer-terapia" background="gray">
        <div className={grid({ type: 'section' })}>
          <div>
            <h2 className={title()}> Por que fazer terapia?</h2>
            <div className="flex flex-col gap-4">
              <p className={paragraph()}>
                Na correria do dia a dia, muitas vezes deixamos de cuidar do
                nosso bem-estar emocional. A terapia é uma jornada de
                autodescoberta e crescimento pessoal, proporcionando uma
                oportunidade única para enfrentar desafios, compreender
                pensamentos e emoções, além de desenvolver recursos internos
                para lidar com situações difíceis.
              </p>

              <p className={paragraph()}>
                A terapia com a Psicóloga Aline Leite, especializada em Terapia
                Cognitiva Comportamental, é um espaço acolhedor e seguro para
                explorar suas questões mais profundas e trabalhar na construção
                de uma vida mais satisfatória e significativa.
              </p>

              <p className={paragraph()}>
                Descubra como a terapia pode melhorar sua qualidade de vida,
                relacionamentos e bem-estar emocional.
              </p>
            </div>
          </div>

          <div className="max-w-[400px] w-full shadow-lg rounded-full transition-all hover:scale-105 md:justify-self-end">
            <img src={woman} alt="Woman" className="rounded-full " />
          </div>
        </div>
      </SectionModel>

      <SectionModel id="tipos-de-atendimento" background="blue">
        <h2 className={title({ align: 'center' })}> Tipos de atendimento</h2>
        <Cards />
      </SectionModel>

      <SectionModel id="sobre" background="gray">
        <div className={grid({ type: 'section' })}>
          <div>
            <h2 className={title()}> Quem é Aline?</h2>

            <div className="flex flex-col gap-4">
              <p className={paragraph()}>
                Aline Leite é uma psicóloga dedicada e altamente qualificada,
                com especialização em Terapia Cognitiva Comportamental. Sua
                paixão pelo trabalho com a saúde mental é evidente em cada
                interação com seus pacientes. Com anos de experiência, ela
                construiu uma reputação sólida como uma profissional empática e
                competente.
              </p>
              <p className={paragraph()}>
                Ao escolher a terapia com a Aline Leite, você estará confiando
                em uma profissional experiente, que valoriza a
                confidencialidade, respeita seus limites e está empenhada em
                oferecer o melhor atendimento possível para ajudá-lo a viver uma
                vida mais plena e significativa.
              </p>
            </div>
          </div>

          <div className="max-w-[400px] w-full shadow-lg rounded-full transition-all hover:scale-105 md:justify-self-end">
            <img src={aline} alt="Woman" className="rounded-full " />
          </div>
        </div>
      </SectionModel>

      <SectionModel id="depoimentos" background="white">
        <Testimonials />
      </SectionModel>

      <SectionModel space={false} id="formulario">
        <div className="max-w-3xl mx-auto">
          <div className="px-12 mb-8 md:mb-20">
            <h2 className={title({ align: 'center', color: 'white' })}>
              {' '}
              O início da sua jornada
            </h2>
            <p
              className={paragraph({
                color: 'white',
                margin: 'none',
                align: 'center',
              })}
            >
              {' '}
              Me conta um pouco sobre você e vamos conversar
            </p>
          </div>
          <Form />
        </div>
      </SectionModel>

      <SectionModel id="aviso" background="gray">
        <p className={paragraph({ size: 'sm' })}>
          <strong>ATENÇÃO</strong>: Este site não oferece tratamento ou
          aconselhamento imediato para pessoas em crise suicida. Em caso de
          crise, ligue para 188 (CVV) ou acesse o site{' '}
          <a
            href="https://www.cvv.org.br"
            target="_blank"
            className="text-psi-purple-200"
            rel="noreferrer"
          >
            www.cvv.org.br
          </a>
          . Em caso de emergência, procure atendimento em um hospital mais
          próximo.
        </p>
      </SectionModel>

      <Footer />

      <WhatsAppLink />
    </>
  );
};

export default Home;
