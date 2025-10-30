import PageTemplate from '../../template/pageTemplate';
import { useEffect, useState } from 'react';
import StepDrawer from '../../components/drawer/StepDrawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { Follow } from '../../components/assets/';
import { OpenDrawerButton } from '../../components/Form/Buttons';


export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const navegate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  },[location.pathname]);

  return (
    <PageTemplate
      leftContent={
        <div className="space-y-6 ">
          <h1 className="text-4xl font-bold text-blue leading-tight">Recomendador de Produtos</h1>
          <p className="text-gray text-lg leading-relaxed space-y-2">
            <span className="block">Bem-vindo ao Recomendador de Produtos RD Station!</span>
            <span className="block">
              Aqui você descobre qual solução da RD Station faz mais sentido pro seu negócio, sem
              complicação.
            </span>
            <span className="block">
              Basta responder algumas perguntas e pronto: te mostramos as melhores recomendações, do
              Marketing ao CRM e Inteligência Artificial. Basta apenas clicar na seta para começar!
            </span>
          </p>
          <div className="flex justify-center">
            <img
              src="/image-hero-tablet.png"
              alt="Imagem das soluções da RD Station"
              className="w-full max-w-2xl scale-125"
            />
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <OpenDrawerButton onClick={() => setIsOpen(true)} />
          <StepDrawer
            text={'RD Station recomenda para você!'}
            description={
              ' Pronto para começar sua jornada com a RD Station? Clique na seta abaixo para avançar para o próximo passo e descobrir a solução perfeita para o seu negócio!'
            }
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onNext={() => navegate('/recommend')}
            icon={<Follow />}
          />
        </div>
      }
    />
  );
}
