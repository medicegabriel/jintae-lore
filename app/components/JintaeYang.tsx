'use client';

import { useState, useEffect } from 'react';

const C = {
  bg: '#0a0908',
  bgWarm: '#0e0c0a',
  surface: '#14110f',
  surfaceLift: '#1a1612',
  border: '#2a2622',
  borderLift: '#3a342d',
  ink: '#e8e4d8',
  inkSoft: '#c9c2b3',
  inkMuted: '#8a8378',
  inkFaded: '#5a544c',
  inkGhost: '#3a342d',
  blood: '#8b1e1e',
  bloodDark: '#5a1010',
  bloodFresh: '#c43030',
  gold: '#a89968',
  goldDim: '#6b5e3f',
};

const CHAPTERS = [
  {
    roman: 'I',
    hanja: '誕',
    korean: '탄생',
    title: 'A Origem',
    sub: 'Nascido da violência.',
    body: [
      'Jintae é filho de uma imigrante coreana nos EUA. Nasceu de um abuso sofrido por sua mãe, cometido por um feiticeiro extremamente conhecido por sua força e participação política. O pai, no entanto, nunca teve a oportunidade de descobrir sobre o nascimento de Jintae, já que sua mãe retornou para a Coreia ainda grávida, com medo do que aquele homem poderia fazer.',
      'Jintae cresceu no interior da Coreia do Sul, sem nunca saber do ocorrido. Praticava Kumdo, a versão coreana do Kendo, desde a infância, e a disciplina da espada foi a única constante que sua mãe podia oferecer com orgulho. Ela nunca contava qualquer informação sobre o pai, não importando o quanto ele perguntasse.',
    ],
  },
  {
    roman: 'II',
    hanja: '覺',
    korean: '각성',
    title: 'O Despertar',
    sub: 'O mundo muda de forma.',
    body: [
      'Até que, no dia em que Jintae despertou como feiticeiro, uma semana depois, aquele homem chegou voando à frente da porta. Começou a agir como se fosse um pai que havia deixado a casa para um trabalho muito distante. Jintae, sem saber de nada, só acreditou. Ficou alegre que finalmente poderia conhecer o pai, sem perceber o choque no rosto da mãe logo atrás.',
      'Foi levado para os EUA pouco depois, e começou a viver com o pai. A mãe não conseguiu recorrer pela guarda na justiça. Aquele homem era influente o bastante para que uma simples mortal não pudesse fazer nada, independente do quanto tentasse.',
    ],
  },
  {
    roman: 'III',
    hanja: '館',
    korean: '저택',
    title: 'Os Anos na Mansão',
    sub: 'Ilusão.',
    body: [
      'A casa onde Jintae passou a viver ficava cercada por florestas no norte do estado de Nova York, longe de olhos curiosos. O pai apresentou tudo como um sonho que finalmente se concretizava: o filho perdido encontrado, a linhagem reunida. Havia tutores, salões de treino, bibliotecas de grimórios trancados a sete chaves, e funcionários que o tratavam com uma reverência que o garoto interpretou, no início, como simples cortesia.',
      'O treinamento começou no dia seguinte à chegada. O pai dizia que Jintae carregava sangue divino, que sua técnica precisava ser moldada antes que se descontrolasse, e que ele já havia perdido tempo demais longe de seu legado. Os dias se tornaram um ciclo de exercícios marciais, estudo de feitiços, e conversas longas no escritório do pai sobre política, hierarquia entre feiticeiros, e o futuro que estava sendo construído para ele.',
      'Jintae prosperou. Seu Kumdo foi abandonado para seguir o estilo de luta de seu pai. A lâmina foi trocada por combate à mão livre. Em pouco tempo, ele se tornava o tipo de prodígio que o pai gostava de exibir em jantares com aliados.',
      'Mas algumas coisas não fechavam. As cartas que ele escrevia para a mãe nunca recebiam resposta. Quando ligava, a voz dela parecia distante, escolhida, como se houvesse alguém do outro lado supervisionando. Funcionários antigos da mansão desapareciam sem aviso, substituídos por outros que pareciam mais nervosos, mais cuidadosos com o que diziam. E havia o jeito como o pai olhava para certas mulheres, certos rivais, certos subordinados. Um olhar que Jintae passou anos confundindo com autoridade, e que só muito mais tarde reconheceria como apetite.',
    ],
  },
  {
    roman: 'IV',
    hanja: '眞',
    korean: '진실',
    title: 'A Descoberta',
    sub: 'Sombra de dúvida.',
    body: [
      'A verdade veio de um lugar inesperado. Aos vinte anos, Jintae acompanhou o pai a uma reunião com outra família feiticeira. Houve desentendimentos, ameaças veladas, e na saída a matriarca da família rival cruzou seu caminho no corredor. Olhou para ele por longos segundos e disse, em coreano para que apenas ele entendesse: "Você se parece com sua mãe. Espero que tenha herdado a coragem dela, e não aquilo que ele fez com ela."',
      'Jintae não dormiu naquela noite. Nem nas seguintes. Começou a procurar, discretamente, sem despertar suspeitas. Acessou arquivos antigos do pai, contas bancárias, registros de viagens de mais de duas décadas atrás. Cruzou datas. Encontrou nomes de mulheres em listas que terminavam de formas que a polícia nunca investigaria a fundo. Encontrou sua mãe entre elas, marcada apenas com a data e a cidade, sem qualquer outra anotação além de um símbolo que ele veria repetido em outros nomes, e que entenderia como um troféu.',
      'Conseguiu, depois de meses, contatar a mãe por um canal que o pai não monitorava. A conversa durou três horas. Ela contou tudo. Cada parte dela quebrava ao falar, e cada parte de Jintae quebrava ao ouvir. Quando desligou, ele ficou parado no escuro do quarto por um tempo que não soube medir.',
      'A obsessão nasceu naquela noite, e tinha um propósito muito claro.',
    ],
  },
  {
    roman: 'V',
    hanja: '備',
    korean: '준비',
    title: 'O Preparo',
    sub: 'Um único propósito.',
    body: [
      'Por dois anos, Jintae viveu uma vida dupla. Em público, continuou sendo o filho-prodígio, o herdeiro perfeito. Em particular, treinava para matar o homem que lhe ensinara quase tudo o que sabia.',
      'Procurou mestres que o pai havia ofendido no passado. Aprendeu técnicas que não constavam em nenhum dos grimórios da biblioteca da mansão. Estudou a própria técnica paterna até encontrar nela rachaduras que o pai não percebia, ou achava insignificantes demais para corrigir. Reforçou o corpo, o espírito e a lâmina. Aperfeiçoou seus punhos até o ponto em que ele já não era apenas a arte que seu pai lhe ensinou, mas algo só dele.',
      'Sabia que não venceria. Conhecia as diferenças de poder, de experiência, de aliados. Mas precisava tentar. Porque viver mais um dia naquela casa fingindo afeto por aquele homem estava se tornando impossível, e porque sua mãe, do outro lado do mundo, merecia pelo menos a notícia de que alguém havia tentado.',
    ],
  },
  {
    roman: 'VI',
    hanja: '雨',
    korean: '대결',
    title: 'O Confronto',
    sub: 'Em uma noite de chuva.',
    body: [
      'Aconteceu em uma noite de chuva, no salão principal da mansão. Jintae chegou, sem disfarce nas intenções. O pai já o esperava. Não havia espanto no rosto dele, apenas algo parecido com decepção, e um traço de divertimento.',
      'A luta foi curta para os padrões de feiticeiros do nível deles, e longa o bastante para destruir três cômodos. Jintae lutou com tudo o que tinha aprendido em segredo, com tudo o que tinha aprendido com o próprio pai, com tudo o que sua raiva podia oferecer. Acertou golpes que teriam matado oponentes menores. Tirou sangue. Forçou o pai a usar técnicas que ele costumava se gabar de nunca precisar contra um adversário qualquer.',
      'Mas no fim, a diferença entre os dois era exatamente o que ele já sabia que era.',
      'Jintae caiu de joelhos no centro do salão, cego de sangue, sangue de seus próprios olhos mutilados. O pai se aproximou caminhando devagar, recompondo a voz para o tom de sempre, o tom paterno que havia enganado o garoto por tantos anos.',
      'Não houve discurso longo. O pai disse, com a calma de quem decide o destino de um animal, que Jintae não merecia morrer. Que só iria esquecer e recomeçar novamente. E o que veio depois foi pior do que qualquer morte que ele pudesse ter imaginado.',
    ],
  },
  {
    roman: 'VII',
    hanja: '消',
    korean: '소멸',
    title: 'O Apagamento',
    sub: 'Vazio.',
    body: [
      'Não existe nome bom para o que o pai fez. Era um objeto que poucos feiticeiros no mundo possuíam, e que ele próprio havia conseguido casualmente ao longo de anos de negociações políticas. Não era simplesmente tirar memórias. Era arrancar a pessoa de dentro de si, deixando intacto apenas o esqueleto: o corpo, os reflexos, o talento, a vontade. Tudo o que dava sentido àquela vontade, no entanto, era despido fio por fio.',
      'A dor não tinha analogia física possível. Foi tanta que o corpo de Jintae, em algum momento durante o processo, simplesmente se recusou a continuar enxergando. A retina estava regenerada, intacta. Mas algo dentro do nervo, dentro da alma, decidiu que não havia nada naquele mundo que valesse a pena ser visto outra vez. A cegueira chegou silenciosa, definitiva, sem que ninguém precisasse explicá-la.',
      'Quando terminou, o pai mandou que o levassem dali. Não para algum lugar específico. Apenas para longe. Talvez quisesse que ele morresse na rua. Talvez achasse que um filho transformado em casca vagando pelo mundo seria uma punição mais elegante do que um cadáver. Talvez nem pensasse mais nele.',
    ],
  },
  {
    roman: 'VIII',
    hanja: '空',
    korean: '공허',
    title: 'A Obsessão Sem Propósito',
    sub: 'Um segundo coração batendo no peito.',
    body: [
      'Jintae acordou em um vagão de trem cuja janela ele não podia ver, em um país cujo nome ele não tinha certeza, em um corpo que respondia a comandos que ele não lembrava ter aprendido. Não sabia o próprio nome até alguém perguntar e os lábios responderem por conta própria. Não sabia o por que.',
      'Mas sabia, de algum lugar tão profundo que não havia palavras para descrevê-lo, que precisava ficar mais forte. Que existia alguém no mundo que ele tinha que enfrentar. Que existia algo que precisava ser corrigido, algo que precisava ser cobrado, algo que precisava acabar.',
      'Não lembrava quem. Não lembrava por quê.',
      'Apenas a obsessão, sem propósito conhecido, batendo no peito como um segundo coração.',
      'É assim, com os olhos vazios voltados para o nada, e uma fome que ele não consegue nomear, que Jintae Yang caminha agora pelo mundo. Procurando força. Procurando inimigos. Procurando algo que perdeu, e que talvez nunca mais consiga lembrar que existiu.',
    ],
  },
];

const VERTICAL_KR = '잊혀진 자 · 눈먼 검사 · 양진태';

export default function JintaeYang() {
  const [openChapter, setOpenChapter] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sections = ['hero', 'chronology', 'void'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden relative"
      style={{
        backgroundColor: C.bg,
        color: C.ink,
        fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,200;9..144,300;9..144,400;9..144,500;9..144,700;9..144,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Noto+Serif+KR:wght@200;300;400;500;700;900&family=JetBrains+Mono:wght@200;300;400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; font-variation-settings: "opsz" 144, "SOFT" 0; }
        .font-display-soft { font-family: 'Fraunces', serif; font-variation-settings: "opsz" 144, "SOFT" 100; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-kr { font-family: 'Noto Serif KR', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes inkSpread {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        @keyframes pulseHeart {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.04); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }

        .reveal { opacity: 0; animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .reveal-fast { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .reveal-slow { opacity: 0; animation: fadeIn 2s ease-out forwards; }
        .ink-spread { transform-origin: left center; animation: inkSpread 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .grain-texture::before {
          content: '';
          position: absolute;
          inset: -50%;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.92 0 0 0 0 0.85 0 0 0 0.5 0'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.4'/></svg>");
          opacity: 0.08;
          pointer-events: none;
          mix-blend-mode: overlay;
          animation: grain 8s steps(6) infinite;
        }

        .chapter-card {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .chapter-card:hover .chapter-roman {
          color: ${C.bloodFresh};
          transform: translateY(-2px);
        }
        .chapter-card:hover .chapter-rule {
          background-color: ${C.blood};
          width: 100%;
        }

        .stat-card {
          transition: all 0.5s ease;
        }
        .stat-card:hover {
          background-color: ${C.surfaceLift};
          border-color: ${C.borderLift};
        }
        .stat-card:hover .stat-mark {
          color: ${C.blood};
        }

        ::selection { background: ${C.blood}; color: ${C.ink}; }

        .pulse-glow { animation: pulseHeart 3.2s ease-in-out infinite; }

        html { scroll-behavior: smooth; }

        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }

        .nav-dot { transition: all 0.4s ease; }

        .fs-10 { font-size: 10px; }
        .fs-11 { font-size: 11px; }
        .ls-2 { letter-spacing: 0.2em; }
        .ls-3 { letter-spacing: 0.3em; }
        .ls-4 { letter-spacing: 0.4em; }
        .ls-5 { letter-spacing: 0.5em; }
        .ls-6 { letter-spacing: 0.6em; }
        .ls-08 { letter-spacing: 0.08em; }
        .ls-15 { letter-spacing: 0.15em; }
        .ls-01 { letter-spacing: 0.01em; }
        .ls-02 { letter-spacing: 0.02em; }
        .lh-tight { line-height: 0.85; }
        .lh-display { line-height: 1.15; }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='300' height='300' filter='url(%23n)' opacity='0.25'/></svg>")`,
          mixBlendMode: 'overlay',
          opacity: 0.4,
        }}
      />

      <div className="hidden lg:flex fixed left-6 top-0 h-screen items-center pointer-events-none z-40">
        <div
          className="font-kr text-xs ls-6 uppercase"
          style={{
            color: C.inkFaded,
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          {VERTICAL_KR}
        </div>
      </div>

      <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-5 z-40">
        {[
          { id: 'hero', label: '序' },
          { id: 'chronology', label: '章' },
          { id: 'void', label: '空' },
        ].map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="nav-dot group flex items-center gap-3 justify-end"
          >
            <span
              className="font-kr text-xs"
              style={{
                color: activeSection === s.id ? C.ink : C.inkGhost,
                opacity: activeSection === s.id ? 1 : 0,
                transition: 'opacity 0.4s, color 0.4s',
              }}
            >
              {s.label}
            </span>
            <span
              className="block"
              style={{
                width: activeSection === s.id ? '32px' : '16px',
                height: '1px',
                backgroundColor: activeSection === s.id ? C.blood : C.borderLift,
                transition: 'all 0.4s ease',
              }}
            />
          </a>
        ))}
      </nav>

      {/* SECTION 01 — HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col px-6 sm:px-12 lg:px-24 pt-12 pb-20"
      >
        <div className="flex items-start justify-between mb-auto pt-4">
          <div
            className="font-mono fs-10 uppercase ls-3 reveal-fast"
            style={{ color: C.inkMuted, animationDelay: '0.1s' }}
          >
            <div style={{ color: C.inkFaded }}>Dossiê / 文書 № 0734</div>
            <div className="mt-1">Classificação · Segundo Grau</div>
          </div>
          <div
            className="font-mono fs-10 uppercase ls-3 text-right reveal-fast"
            style={{ color: C.inkMuted, animationDelay: '0.2s' }}
          >
            <div>Última atualização</div>
            <div style={{ color: C.inkFaded }}>Indeterminada</div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
          <div
            className="reveal mb-8 flex items-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <div
              className="h-px ink-spread"
              style={{
                width: '64px',
                backgroundColor: C.blood,
                animationDelay: '0.5s',
              }}
            />
            <span
              className="font-mono fs-11 uppercase ls-4"
              style={{ color: C.blood }}
            >
              Sujeito · 양진태
            </span>
          </div>

          <h1
            className="font-display reveal lh-tight mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 13vw, 11rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              animationDelay: '0.5s',
              color: C.ink,
            }}
          >
            Jintae
            <br />
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 200,
                color: C.inkSoft,
              }}
            >
              Yang
            </span>
          </h1>

          <div
            className="flex flex-wrap items-baseline gap-x-8 gap-y-2 mb-12 reveal"
            style={{ animationDelay: '0.7s' }}
          >
            <span
              className="font-kr"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 300,
                color: C.gold,
                letterSpacing: '0.08em',
              }}
            >
              梁進泰 · 양진태
            </span>
            <span
              className="font-mono text-xs uppercase ls-3"
              style={{ color: C.inkMuted }}
            >
              vinte e três anos
            </span>
          </div>

        </div>

      </section>

      {/* SECTION 02 — CHRONOLOGY */}
      <section
        id="chronology"
        className="relative px-6 sm:px-12 lg:px-24 py-24 lg:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            num="章"
            label="cronologia"
            title="Os oito capítulos"
            sub="Toque em cada algarismo para abrir o registro completo."
          />

          <div className="mt-20 space-y-px">
            {CHAPTERS.map((ch, i) => {
              const isOpen = openChapter === i;
              return (
                <div
                  key={i}
                  className="chapter-card border-t"
                  style={{
                    borderColor: isOpen ? C.blood : C.border,
                    backgroundColor: isOpen ? C.surface : 'transparent',
                  }}
                >
                  <button
                    onClick={() => setOpenChapter(isOpen ? -1 : i)}
                    className="w-full text-left px-2 sm:px-6 py-8 lg:py-10 grid grid-cols-12 gap-4 lg:gap-8 items-baseline group"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <div
                        className="chapter-roman font-display"
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                          color: isOpen ? C.bloodFresh : C.inkMuted,
                          fontWeight: 300,
                          fontStyle: 'italic',
                          transition: 'all 0.5s',
                        }}
                      >
                        {ch.roman}
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <div
                        className="font-kr"
                        style={{
                          fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                          color: isOpen ? C.gold : C.inkFaded,
                          fontWeight: 300,
                          transition: 'color 0.5s',
                        }}
                      >
                        {ch.hanja}
                      </div>
                      <div
                        className="font-kr fs-10 ls-2 mt-1"
                        style={{ color: C.inkFaded }}
                      >
                        {ch.korean}
                      </div>
                    </div>

                    <div className="col-span-8 sm:col-span-8">
                      <h3
                        className="font-display leading-tight mb-1"
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                          color: isOpen ? C.ink : C.inkSoft,
                          fontWeight: 400,
                          transition: 'color 0.5s',
                        }}
                      >
                        {ch.title}
                      </h3>
                      <p
                        className="font-serif italic"
                        style={{
                          fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                          color: C.inkMuted,
                        }}
                      >
                        {ch.sub}
                      </p>
                    </div>

                    <div className="col-span-12 sm:col-span-2 flex sm:justify-end items-center gap-3">
                      <div
                        className="chapter-rule h-px"
                        style={{
                          width: isOpen ? '100%' : '24px',
                          backgroundColor: isOpen ? C.blood : C.borderLift,
                          transition: 'all 0.6s',
                        }}
                      />
                      <span
                        className="font-mono text-xs"
                        style={{
                          color: isOpen ? C.blood : C.inkMuted,
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                          transition: 'transform 0.4s, color 0.4s',
                          display: 'inline-block',
                        }}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '1200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div className="px-2 sm:px-6 pb-12 grid grid-cols-12 gap-4 lg:gap-8">
                      <div className="hidden sm:block col-span-2" />
                      <div className="col-span-12 sm:col-span-9 space-y-5">
                        {ch.body.map((p, j) => (
                          <p
                            key={j}
                            className="font-serif leading-relaxed"
                            style={{
                              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                              color: C.inkSoft,
                              fontStyle: 'normal',
                              maxWidth: '62ch',
                            }}
                          >
                            {p}
                          </p>
                        ))}
                        <div
                          className="pt-4 mt-2 border-t font-mono fs-10 uppercase ls-3"
                          style={{ borderColor: C.border, color: C.inkFaded }}
                        >
                          fim do capítulo {ch.roman}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t" style={{ borderColor: C.border }} />
          </div>
        </div>
      </section>

      {/* SECTION 03 — THE VOID */}
      <section
        id="void"
        className="relative px-6 sm:px-12 lg:px-24 py-32 lg:py-56 overflow-hidden"
        style={{ backgroundColor: C.bg }}
      >
        <div
          className="absolute inset-0 pulse-glow pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${C.bloodDark}22 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-5xl mx-auto relative text-center">
          <div className="font-mono fs-10 uppercase ls-5 mb-8" style={{ color: C.blood }}>
            estado atual · 空 · void
          </div>

          <div
            className="font-kr select-none mb-4"
            style={{
              fontSize: 'clamp(8rem, 20vw, 16rem)',
              color: C.surface,
              fontWeight: 900,
              lineHeight: 0.9,
              textShadow: `0 0 60px ${C.bloodDark}`,
            }}
          >
            空
          </div>

          <p
            className="font-display italic lh-display mb-10 mx-auto"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              fontWeight: 300,
              color: C.ink,
              maxWidth: '32ch',
              letterSpacing: '-0.01em',
            }}
          >
            Apenas a obsessão, sem propósito conhecido, batendo no peito como um segundo coração.
          </p>

          <p
            className="font-kr leading-relaxed mb-16"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)',
              color: C.inkMuted,
              fontWeight: 300,
            }}
          >
            오직 집착만이, 알 수 없는 목적으로, 두 번째 심장처럼 가슴을 두드린다.
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-16 border-t" style={{ borderColor: C.border }}>
            {[
              { kr: '누구', pt: 'Não lembra quem.' },
              { kr: '왜', pt: 'Não lembra por quê.' },
              { kr: '걷는다', pt: 'Mas continua andando.' },
            ].map((line, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-kr text-3xl mb-3"
                  style={{ color: C.gold, fontWeight: 300 }}
                >
                  {line.kr}
                </div>
                <div
                  className="font-display italic"
                  style={{ color: C.inkSoft, fontSize: '1.1rem' }}
                >
                  {line.pt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative px-6 sm:px-12 lg:px-24 py-12 border-t"
        style={{ borderColor: C.border }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-6">
          <div>
            <div
              className="font-display italic mb-1"
              style={{ fontSize: '1.25rem', color: C.inkSoft }}
            >
              Jintae Yang · 양진태
            </div>
            <div
              className="font-mono fs-10 uppercase ls-3"
              style={{ color: C.inkFaded }}
            >
              dossiê № 0734 · arquivo de feiticeiros · acesso restrito
            </div>
          </div>
          <div
            className="font-serif italic text-sm text-right"
            style={{ color: C.inkMuted }}
          >
            "procurando força. procurando inimigos.
            <br />
            procurando algo que perdeu, e que talvez nunca mais consiga lembrar que existiu."
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ num, label, title, sub }: {
  num: string;
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-2">
        <div
          className="font-kr"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: C.surface,
            fontWeight: 900,
            lineHeight: 1,
            textShadow: `1px 0 0 ${C.borderLift}, -1px 0 0 ${C.borderLift}, 0 1px 0 ${C.borderLift}, 0 -1px 0 ${C.borderLift}`,
          }}
        >
          {num}
        </div>
      </div>
      <div className="md:col-span-7">
        <div
          className="font-mono fs-10 uppercase ls-4 mb-3"
          style={{ color: C.blood }}
        >
          ─── {label} ───
        </div>
        <h2
          className="font-display leading-tight mb-3"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            color: C.ink,
            fontWeight: 300,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h2>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            color: C.inkMuted,
          }}
        >
          {sub}
        </p>
      </div>
      <div className="md:col-span-3 hidden md:block">
        <div
          className="h-px"
          style={{ backgroundColor: C.border, width: '100%' }}
        />
      </div>
    </div>
  );
}

