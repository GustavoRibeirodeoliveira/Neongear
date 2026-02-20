document.addEventListener("DOMContentLoaded", () => {

  const products = [
    {
      id: 1,
      name: "Mouse Gamer Fortrek BlackFire, RGB, 7200DPI, 6 Botões, USB 2.0",
      price:  69.99,
      image: "mouse.webp",
      stock: "Em estoque",
      desc: `O Mouse Gamer BLAKCFIRE RGB da Fortrek foi desenvolvido para canhotos e destros, e é uma ótima escolha para o setup gamer, com um design moderno e confortável proporciona uma ótima jogabilidade e controle dos movimentos.



Apresentando um LED RGB conta com capacidade de 13 modos de iluminação e switch Huano. O mouse Blackfire é construído com plástico ABS de alta resistência e acabamento UV, 6 botões de comandos + Scroll em silicone para adicionar mais aderência ao toque. O modelo alcança até 7.200dpi oferecendo agilidade e precisão em rápidos movimentos.



Inclui um software avançado para personalizar o dispositivo de acordo com seus desejos, por esse software é possível personalizar script de macro, atribuição de botão, iluminação, configurações de modo e salvar perfis em seu computador para acesso fácil e rápido.

 

Instale o mouse inserindo-o em conexão USB na respectiva porta disponível em seu computador. As funções e software de configuração não funcionam nos sistemas operacionais do MAC, Linux, Ubuntu.`,
      images:[
      "mouse.webp",
      "mouse2.webp"
      ],
      specs: [
        "Tecnologia e Precisão: Sensor de 7200 DPI com switch Huano para respostas ágeis",
        "Design e Ergonomia: Formato ambidestro com scroll em silicone e laterais texturizadas para conforto e controle",
        "Recursos Especiais: Iluminação RGB customizável com 13 modos e macros programáveis para jogabilidade personalizada"
      ]
    },
    {
      id: 2,
      name: "Teclado Magnético Gamer Redragon Kumara Pro, RGB, Switch Brown, USB, ABNT2, Preto",
      price: 219.99,
      image: "tecladomeca.PNG",
      stock: "Design e Ergonomia: Formato TKL compacto para otimizar espaço, teclas flutuantes e layout ABNT2, desenvolvido para maior conforto e familiaridade.",
      desc: `a evolução que o seu setup de alto desempenho precisava. Combinando a precisão do acionamento magnético com a robustez e o design TKL compacto, este teclado é projetado para jogadores que buscam velocidade, durabilidade e máximo espaço para manobras do mouse. Prepare-se para uma resposta ultrarrápida e uma experiência de digitação e gaming inigualável.
      O diferencial do Kumara Pro V2 reside em sua tecnologia de Acionamento: Magnético, que opera sem o uso de contatos metálicos. Esta inovação não só aumenta drasticamente a durabilidade dos componentes como também oferece uma resposta incrivelmente rápida e precisa. O teclado é equipado com Switches: Redragon Magnético Marrom, que proporcionam uma sensação tátil suave. A funcionalidade Hotswap DIY é suportada, mas é importante notar que é compatível somente com switches magnéticos, permitindo a personalização e manutenção da sua experiência de digitação e jogo. 
      O visual do Kumara Pro V2 é tão impressionante quanto seu desempenho. A Iluminação: RGB utiliza a tecnologia Redragon Chroma Mk.II individual por tecla, trazendo mais brilho para seu setup e permitindo efeitos dinâmicos e personalizáveis. Para o controle total da iluminação e de outras funcionalidades, o teclado é Compatível com Software para controle da iluminação RGB e criação de Macros. A versatilidade do software permite a personalização completa do seu perfil gamer.`,
      images:[
        "teclado1.webp",
        "teclado2.webp",
        "teclado3.webp",
        "teclado4.webp",
        "teclado5.webp"
      ],
      
      specs: [
        "Tecnologia e Precisão: Acionamento magnético Redragon para resposta ultrarrápida, com switches marrons magnéticos que oferecem toque tátil suave.",
        "Iluminação RGB",
        "Conectividade: Conexão USB estável com cabo de 2m, compatível com software para customização e funcionalidade de bloqueio da tecla Windows.",
        "Recursos Especiais: Iluminação RGB Redragon Chroma Mk.II individual por tecla, keycaps doubleshot injection para durabilidade e ajuste de altura."
      ]
    },
    {
      id: 3,
      name: "Mousepad Gamer Dukie RGB Grande Speed Xl 800x300mm Iluminação LED Antiderrapante",
      price: 69.90,
      image: "mousepad.PNG",
      stock: "Em estoque",
      images: [
        "mousepad.PNG",
        "mousepad2.webp",
        "mousepad3.webp"
      ],
      desc: `
        &nbsp&nbsp&nbsp&nbspMousepad Gamer RGB Speed XL Dukie foi projetado para jogadores que exigem alto desempenho aliado a impacto visual.

        Com dimensões generosas de 800 × 300 × 3 mm, oferece espaço ideal para movimentos amplos, acomodando teclado e mouse com total conforto.<br><br>

       &nbsp&nbsp&nbsp&nbsp A iluminação RGB com múltiplos modos permite criar o setup perfeito com efeitos vibrantes e personalizáveis. Basta conectar via USB para ativar.

        Sua superfície Speed possui textura otimizada para movimentos rápidos e suaves, ideal para jogos de alta precisão. Compatível com sensores ópticos e a laser.<br><br>

        &nbsp&nbsp&nbspA base emborrachada antiderrapante garante firmeza total mesmo durante jogadas intensas, evitando deslocamentos indesejados.<br>

        &nbsp&nbsp O acabamento premium proporciona maior durabilidade, sendo ideal para longas sessões de gameplay.
      `,
      specs: [ 
        "Marca: Dukie",
        "Modelo: Speed XL RGB",
        "Cor: Preto",
        "Dimensões: 800 × 300 × 3 mm",
        "Conexão: USB (alimentação do RGB)"
      ]
    },
    {
  id: 4,
  name: "Headset Gamer Sem Fio 7.1 Redragon Zeus Pro H510 Wireless",
  price: 319.54,
   stock: "Em estoque",
  images: [
    "headset1.PNG",
    "headset2.webp",
    "headset3.webp",
    "headset4.webp",  
  ], 
  desc:`Headset Gamer Redragon Zeus Pro Wireless 7.1 53mm H510 PRO sem Fio é um fone de ouvido de alto desempenho, projetado para oferecer uma experiência sonora imersiva e conforto durante longas sessões de jogo. 
Com conectividade sem fio de baixa latência, som surround 7.1 e drivers de 53mm, ele proporciona áudio de alta qualidade e liberdade de movimento.Com conectividade sem fio de baixa latência, som surround 7.1 e drivers de 53mm, ele proporciona áudio de alta qualidade e liberdade de movimento.
 `,
  specs: [
    "Conectividade: Sem fio via 2.4GHz, Bluetooth e USB-C removível, oferecendo versatilidade para diferentes dispositivos.",
    "Áudio: Som surround 7.1 virtual, proporcionando imersão total em jogos e mídias.",
    "Conforto: Almofadas auriculares macias e arco ajustável, garantindo conforto durante o uso prolongado.",
    "Microfone destacável com cancelamento de ruído, garantindo comunicação eficiente.",
    "Bateria: Autonomia de até 18 horas, permitindo longas sessões sem interrupções."
  ]
},
    {
      id: 5,
      name: "Controle DualSense Edição Limitada Astro Bot",
      price: 599.99,
       stock: "Em estoque",
      images: [
        "controleps5.PNG",
       "controle2.webp", 
              "controle3.webp", 
                 "controle4.webp", 

      ],
      desc: "Controle DualSense Edição Limitada Astro Bot traz o design icônico do adorável robô da PlayStation. Com tecnologia de ponta, gatilhos adaptativos e feedback háptico imersivo, oferece uma experiência única de jogo. Compatível com PS5 e PC, é perfeito para quem busca precisão e conforto em longas sessões de gameplay.",
      specs: [
        "Edição Limitada Astro Bot",
        "Compatível com PS5 e PC via USB/Bluetooth",
        "Gatilhos adaptativos DualSense",
        "Feedback háptico de alta fidelidade",
        "Bateria de até 12 horas",
        "Microfone embutido",
        "Conexão USB-C"
      ],
    },
{
id:6,
name:"Mouse Gamer Razer DeathAdder Essential",
price:189.99,
       stock:"em estoque",
      images:[
        "mousebranco.webp",
        "mousebranco2.webp",
        "mousebranco3.webp"
      ],
      desc:`O Razer DeathAdder Essential é a escolha fundamental para qualquer jogador que busca desempenho de nível profissional com a confiabilidade de uma das famílias de mouses mais vendidas do mundo. Mantendo o formato ergonômico clássico e a durabilidade lendária da linha DeathAdder, este mouse garante longas horas de jogatina com conforto e precisão impecáveis.
      Não perca um movimento sequer! Equipado com um Sensor Óptico de 6.400 DPI de precisão real, o DeathAdder Essential oferece rastreamento rápido e preciso, permitindo movimentos velozes e decisivos. Com velocidade máxima de 220 IPS (polegadas por segundo) e aceleração de 30 G, você terá o controle necessário para dominar qualquer cenário de batalha.
      Construído para suportar o uso intenso, o DeathAdder Essential vem com Switches Mecânicos Razer premiados, projetados para durar até 10 milhões de cliques. Esta durabilidade extrema, combinada com os 5 botões Hyperesponse programáveis de forma independente, garante que cada comando seja registrado de forma nítida e confiável, dando a você uma vantagem competitiva.`,
      specs: [
  "Sensor óptico de alta precisão com até 6.400 DPI",
  "5 botões programáveis Hyperesponse com switches mecânicos Razer (10 milhões de cliques)",
  "Taxa de polling de 1000 Hz para resposta ultrarrápida",
  "Design ergonômico destro ultraleve com apenas 96g",
  "Iluminação verde característica e cabo de 1,8m"
]

},
 
{ id:7,
      name: "Teclado Gamer Mecânico CORSAIR K65 RGB MINI 8000hz, LED RGB, 60%, Teclas CHERRY MX SPEED, USB 3.0, Branco",
      price:  545.90,
       stock: "Em estoque",
      images:[
        "teclabranco.webp",
        "teclabranco2.webp",
        "teclabranco3.webp",

      ],
      desc:`Liberte todo o seu potencial gamer com o Teclado Mecânico CORSAIR K65 RGB MINI 60%! Projetado para quem busca o máximo de desempenho sem abrir mão da portabilidade, este teclado redefine o conceito de poder em um formato compacto. Prepare-se para uma experiência de jogo incomparável!
      Sinta a diferença com as teclas PBT de injeção dupla, que garantem uma durabilidade excepcional e um toque incrivelmente agradável. Desfrute de um teclado que não só resiste às suas batalhas mais intensas, mas também eleva o nível do seu setup com sua aparência premium
      Experimente a resposta ultrarrápida do hyper-polling de 8.000Hz, impulsionado pela tecnologia de hiperprocessamento AXON. Combinado com as teclas mecânicas CHERRY MX SPEED RGB Silver, cada toque é registrado com velocidade e precisão cirúrgicas, dando a você a vantagem competitiva que você precisa para vencer.
      Mergulhe em um mundo de cores vibrantes com a luz de fundo RGB por tecla, totalmente personalizável através do poderoso software iCUE da CORSAIR. Crie efeitos de iluminação dinâmicos, remapeie teclas, configure macros personalizadas e desfrute de uma integração imersiva com seus jogos favoritos. Seu teclado, suas regras!
      `,
      specs:[
        "Tecnologia e Precisão: Mecânico com switches CHERRY MX SPEED RGB Silver e hyper-polling de 8.000Hz, assegurando resposta ultrarrápida",
        "Design e Ergonomia: Formato compacto de 60% com keycaps PBT double-shot e cabo removível, ideal para portabilidade e conforto",
        "Conectividade: USB 3.0 Tipo A com compatibilidade via software iCUE em Windows e macOS, oferecendo versatilidade com fio",
        "Recursos Especiais: Iluminação RGB personalizável por tecla e armazenamento interno para até 50 perfis, permitindo customização completa"
      ]


 },

 {
  id:8,
  name:"Placa-Mãe MSI MPG B550 Gaming Plus, AMD AM4, ATX, DDR4, Preto",
  price:939.99,
   stock:"em estoque",
  images:[
    "placamãe.jpg",
     "placamãe2.jpg",
      "placamãe3.jpg",
       "placamãe4.jpg",
  ],
  desc:`Eleve seus jogos com a série MPG! Experimente uma imersão completa com controle avançado de iluminação RGB e uma faixa de LED frontal que te mantém informado em tempo real. Personalize seu setup do seu jeito e domine as partidas com estilo.
      A série MPG oferece o máximo em desempenho. Com design térmico aprimorado e dissipador de calor PWM estendido, os processadores Ryzen de 3ª geração trabalham a toda velocidade, garantindo um gameplay fluido e sem lag. E com o Lightning Gen 4 M.2, você terá à disposição uma solução de armazenamento mais rápida, carregando seus jogos em questão de segundos.
  `,
      specs:[
        "Especificações Técnicas: Compatível com AMD Ryzen série 5000 e 3000 (exceto Ryzen 5 3400G e Ryzen 3 3200G) e Ryzen série 4000 G, otimizado pelo chipset AMD B550",
        "Compatibilidade: Integração com processadores AMD Ryzen, oferecendo compatibilidade com diversas gerações e séries",
        "Recursos Avançados: Iluminação RGB customizável e faixa de LED frontal para monitoramento em tempo real"
       ]
 },
 {
  id:9,
    name:"SSD Kingston NV3, 1 TB, M.2 2280, PCIe 4.0 x4, NVMe",
    price:999.99,
    category:"SSD",
    images:["ssd.jpg",
      "ssd2.jpg",
      "ssd3.jpg"

    ],
    desc:`Kingston’s NV3 PCIe 4.0 NVMe SSD é uma solução de última geração para armazenamento com um controlador NVMe Gen 4x4, proporcionando velocidade de leitura/gravação de até 6.000/5.000MB/S. Ele oferece um consumo de energia mais baixo e aquecimento reduzido, otimizando o desempenho do seu sistema sem comprometer a utilidade.
 Com incríveis velocidades de leitura/gravação, o SSD NV2 não somente irá aumentar o desempenho, como também poderá ser usado para dar vida nova em computadores mais antigos. `,
      specs:[
        "Especificações Técnicas: Formato M.2 2280, interface PCIe 4.0 NVMe, proporcionando taxas de até 6000MB/s (leitura) e 4000MB/s (escrita).",
        "Compatibilidade: Ideal para notebooks e desktops com slots M.2, assegurando integração e largura de banda otimizadas.",
        "Performance e Benchmarks: Velocidades de leitura/escrita de até 6000/4000 MB/s, indicado para jogos, aplicações e transferências rápidas.",
        "Recursos Avançados: Durabilidade de 320 TBW e MTBF de 2.000.000 horas, assegurando operação consistente em temperaturas de 0°C a 70°C."
       ]

 },
 {
id:10,
    name:"Headset JBL Quantum 910 Gamer Wireless RGB Hi-Res, PS5, PS4, Nintendo Switch",
    price:1635.83,
    category:"headset",
    images:[
      "fone.webp",
       "fone2.webp",
        "fone3.webp",
         "fone4.webp",
          "fone5.webp",
    ],
    desc:`O JBL QuantumSPHERE 360, com tecnologia JBL QuantumENGINE, disponível através do dongle/adaptador USB-C, proporciona a você um nível profissional de posicionamento de áudio 3D em seu PC. A calibragem personalizada do algoritmo da JBL, com o sensor de movimento e o microfone, é feita exclusivamente para o JBL Quantum 910 Wireless, proporcionando aos jogadores de PC um posicionamento de áudio preciso e de última geração, além de um ambiente sonoro fixo e independente que melhora seus instintos naturais. O JBL QuantumENGINE também está equipado com o DTS Headphone X: v2.0.
    De pequenos passos até a explosão mais alta, o exclusivo JBL QuantumSOUND torna cada cena épica e cada jogador mais competitivo. Os drivers de neodímio de 50 mm com alta resolução certificados Hi-Res, oferecem uma curva de som ajustada pelos audiologistas da JBL e projetada especificamente para jogos. Nosso áudio exclusivo cria o ambiente sonoro mais realista para uma vantagem competitiva em qualquer batalha.
    `,
    specs:["Tecnologia e Precisão: Áudio 3D com JBL QuantumSPHERE 360 e rastreamento de cabeça para posicionamento de som preciso",
      "Design e Ergonomia: Formato over-ear com drivers de 50mm e certificação Hi-Res para conforto e imersão",
      "Conectividade: USB-C e Bluetooth 5.2 com A2DP 1.3 e HFP 1.8 para versatilidade sem fio",
      "Recursos Especiais: QuantumSPATIAL 360 para áudio espacial em consoles e PC, e JBL QuantumSOUND para realismo sonoro"

    ]
 },
{
  id:11,
    name:"Controle Wireless 8BitDo Ultimate 2, Efeito Hall, Bluetooth, com Dock",
    price:369.00,
    category:"controle",
    images:[
      "comtrole.webp",
      "comtrole2.webp",
      "comtrole3.webp",
      "comtrole4.webp"
    ],
    desc:`Eleve sua experiência de jogo a um novo patamar com o Controle 8BitDo Ultimate 2. Projetado para gamers que buscam precisão e personalização, este controle oferece uma versatilidade incrível com múltiplas opções de conectividade, seja via Bluetooth ou Wireless 2.4G para Switch e Windows. Com o software Ultimate V2, você tem controle total para mapear botões, ajustar a sensibilidade dos analógicos e gatilhos, controlar a vibração e criar macros complexas, salvando tudo em até 3 perfis personalizáveis que podem ser trocados rapidamente.
    Equipado com os inovadores TMR joysticks, o Ultimate 2 garante maior sensibilidade, precisão superior e durabilidade aprimorada, tudo com menor consumo de energia. Os anéis de metal resistentes ao desgaste nos joysticks e os gatilhos com modo de troca (linear e micro-switch) oferecem uma resposta tátil refinada e adaptável a qualquer estilo de jogo. Os botões traseiros programáveis (L4 e R4) permitem reações mais rápidas, colocando você sempre um passo à frente de seus adversários.
    O design do 8BitDo Ultimate 2 não é apenas elegante, mas também funcional. A iluminação RGB "Fire Ring" nos joysticks adiciona um toque de estilo, enquanto o D-pad e os botões táteis oferecem uma sensação de clique suave e responsiva. O controle de movimento de 6 eixos proporciona uma imersão extra em jogos compatíveis. Além disso, o controle vem com uma base de carregamento integrada, garantindo que ele esteja sempre pronto para a ação e se reconecte automaticamente ao ser retirado da base.`,
    
    specs:["Tecnologia e Precisão: TMR joysticks para sensibilidade e precisão superior, oferecendo durabilidade com menor consumo de energia",
       "Design e Ergonomia: Formato ergonômico com iluminação RGB e botões táteis responsivos, ideal para conforto e estilo",
        "Conectividade: Bluetooth e Wireless 2.4G, compatível com Switch e Windows, com base de carregamento e reconexão automática",
         "Recursos Especiais: Software Ultimate V2 para customização de botões, sensibilidade, vibração e macros, além de botões traseiros programáveis",
    ]
},
{
  id:12,
  name:"Placa-Mãe Gigabyte B550M Aorus Elite Rev. 1.3, AMD AM4, Micro ATX, DDR4, Preto - B550M AORUS ELITE",
  price:739.99,
  category:"placa-mãe",
  images:[
 "placa.webp",
 "placa2.webp",
 "placa3.webp"
],
desc:`Libere todo o potencial dos processadores AMD Ryzen de 3ª e 4ª geração com a placa-mãe Gigabyte B550M Aorus Elite. Projetada para oferecer desempenho excepcional, ela conta com recursos avançados como VRM digital de alta qualidade, slots DDR4 de alta velocidade, e conectividade ultrarrápida. Ideal para gamers que buscam uma plataforma sólida para construir um PC poderoso e personalizável.
Plataforma AMD Ryzen de Alta Performance: Liberte todo o potencial dos processadores AMD Ryzen de 3ª e 4ª geração com esta placa-mãe robusta e eficiente.
VRM Digital de Alta Qualidade: Garanta estabilidade e overclocking seguro, mesmo nas tarefas mais exigentes. Memória DDR4 de Alta Velocidade: Suporte a memórias DDR4 de alta frequência, proporcionando maior largura de banda e desempenho excepcional.
`,
specs:["Especificações Técnicas: Arquitetura otimizada para Ryzen série 5000/4000/3000 com VRM digital 5+3 fases para estabilidade",
"Compatibilidade: Slots DDR4 (ECC/não ECC) de alta velocidade e PCIe 4.0 para Ryzen, suportando NVMe PCIe 4.0/3.0 M.2",
"Performance e Benchmarks: Ideal para gamers e entusiastas, áudio de alta qualidade e Realtek GbE LAN"]

},
{id:13,
  name:"SSD Adata Legend 860, 1TB, M.2 2280, PCIe Gen 4x4, NVMe Leitura: 6000MB/s, Gravação: 5000MB/s, Compatível com PS5, Preto",
  price:849.99,
  category:"ssd",
  images:[
    "sdd.webp",
     "sdd2.webp",
      "sdd3.webp",
       "sdd4.webp",
        "sdd5.webp"
  ],
  desc:`O SSD LEGEND 860 é a escolha perfeita para quem busca desempenho extremo. Com velocidades impressionantes de leitura e gravação de até 6.000/5.000 MB/s, ele oferece uma experiência de computação ágil e fluida. Seja para expandir o armazenamento do seu console PS5 ou para acelerar projetos criativos exigentes, o LEGEND 860 está pronto para liderar o caminho.
  Com uma generosa capacidade de armazenamento, este SSD é ideal para armazenar grandes arquivos, jogos e projetos criativos. Compatível com as plataformas Intel e AMD mais recentes, ele também suporta a interface PCIe Gen4 x4 e a tecnologia NVMe 1.4, garantindo o máximo desempenho em qualquer ambiente.
  Atualize seu console PS5 com o LEGEND 860 e experimente tempos de carregamento ultrarrápidos. Além disso, criadores de conteúdo podem contar com recursos como Cache SLC e suporte ao Host Memory Buffer (HMB), que tornam este SSD uma ferramenta poderosa para edição de vídeos, design gráfico e outros trabalhos criativos.
  Seja para gamers, profissionais criativos ou entusiastas de tecnologia, o SSD LEGEND 860 é a escolha certa. Ele combina velocidade, armazenamento e confiabilidade em um design de última geração, ideal para quem busca elevar o nível de desempenho do sistema.
  `,
specs:[
  "Especificações Técnicas: Arquitetura M.2 2280 com PCIe Gen 4x4 e NVMe 1.4 para desempenho de alta qualidade",
  "Compatibilidade: Funciona com plataformas Intel e AMD, otimizado para consoles PS5 e sistemas de última geração",
  "Performance e Benchmarks: Velocidades de leitura/gravação de até 6000/5000 MB/s, ideal para jogos e criação de conteúdo",
  "Recursos Avançados: Cache SLC e HMB para edição de vídeos, design gráfico e performance otimizada"
]

},
{
  id:15,
  name:"Mouse Gamer GXTrust 922W Ybar RGB, 6 Botões, 7200 DPI, USB, Branco",
  price:98.99,
  category:"mouse",
  images:["mose.webp",
    "mose2.webp",
    "mose3.webp"
  ],

  desc:`
  O Mouse Gamer Trust GXT 922W foi projetado para gamers que buscam precisão e controle absoluto em suas partidas. Com um sensor de até 7.200 DPI ajustável, aceleração de 20G e uma taxa de votação de até 1000Hz, ele oferece movimentos rápidos e rastreamento preciso, garantindo vantagem competitiva em qualquer jogo.
  Seja para jogar ou para compor seu setup, o Trust GXT 922W entrega um visual impressionante. Sua iluminação em RGB completo traz um toque de personalização ao seu espaço, criando uma experiência visual envolvente que combina com o seu estilo.
  Com 6 botões programáveis e suporte à programação de macros, você terá total controle em suas mãos. O botão DPI ajustável permite alternar rapidamente entre diferentes níveis de sensibilidade, adaptando-se facilmente a qualquer situação no jogo. Além disso, o cabo de 210 cm proporciona liberdade de movimento.
  O Trust GXT 922W também é uma escolha consciente. Feito com 68% de materiais reciclados (PCR), ele combina alto desempenho e compromisso com a sustentabilidade, sem comprometer a qualidade ou durabilidade.
  `,
  specs:[
    "Tecnologia e Precisão: Sensor de alta performance com até 7200 DPI, alcançando aceleração de 20G e taxa de votação de 1000Hz, ideal para jogos",
    "Design e Ergonomia: Formato padrão com tamanho médio e iluminação RGB completa, projetado para se adequar a diversos estilos de jogo",
    "Conectividade: Conexão USB 2.0 com cabo de 210 cm, compatível com PS4, PS5, Xbox Series S/X, PC e laptops, oferecendo versatilidade",
    "Recursos Especiais: Possui 6 botões programáveis, ajuste de DPI e memória on-board, permitindo customização e adaptação a diferentes jogos"
  ]
},
{
  id:16,
  name:"Mousepad Gamer GXTrust GXT 764 Glide-Flex, RGB, Control, Estendido ",
  price:155.90,
  category:"mousepad",
  images:["mousepade.webp",
    "mousepade2.webp",
    "mousepade3.webp",
        "mousepade4.webp"

  ],

  desc:`Com seu design extremamente grande, superfície de tecido confortável e bordas iluminadas por LED RGB, o Mouse Gamer GXTrust GXT 764 Glide-Flex XXL RGB combina todos os recursos para você começar uma sequência de vitórias.
  Não deixe que nada fique entre você e sua vitória. Este mouse pad XXL garante a máxima liberdade de movimento, para que você possa realizar qualquer ação necessária para alcançar essa vitória. Desfrute de quase um metro de largura - grande o suficiente para abrigar o teclado e se envolver com a ação do mouse, com a base de borracha antiderrapante mantendo o mouse pad no lugar durante as batalhas mais intensas.
  Controle todos os movimentos do seu mouse. Com sua textura de superfície otimizada, o Mouse Pad GXTrust GXT 764 Glide-Flex XXL RGB é uma base confiável para qualquer mouse. Deslize pela almofada com velocidade e precisão, independentemente de qual sensor ou configuração de sensibilidade você está usando. Com um design flexível, você pode enrolá-lo e levar o teclado para qualquer lugar que o jogo o levar.
  `,
  specs:[
 "Tecnologia e Precisão: Superfície macia para rastreamento preciso com sensores ópticos e laser, assegurando jogabilidade de alta performance",
  "Design e Ergonomia: Formato retangular extra longo (930mm x 300mm) com base antiderrapante, oferecendo conforto e estabilidade",
 "Conectividade: Conexão USB para iluminação RGB personalizável, permitindo fácil integração e uso",
 "Recursos Especiais: Iluminação RGB nas bordas com múltiplos efeitos e design flexível roll-up para portabilidade",

  ]
},
{
  id:17,
name:"Placa Mãe ASUS B650M-AYW Wi-Fi, AM5, mATX, DDR5, Wi-fi, Bluetooth",
price:1099.99,
category:"placa-mãe",
images:["plac.webp",
  "plac2.webp",
  "plac3.webp",
  "plac4.webp"

],
 

desc:`Experimente o futuro dos jogos e da computação de alto desempenho com a Placa-Mãe Asus B650M-AYW WIFI. Projetada para suportar os mais recentes processadores AMD Ryzen com soquete AM5, esta placa-mãe oferece uma base sólida e confiável para a sua máquina, garantindo performance de ponta para as tarefas mais exigentes e para os jogos mais modernos.
Prepare-se para velocidades incríveis com o suporte para memórias DDR5. A Asus B650M-AYW WIFI permite que você aproveite ao máximo a nova geração de memórias RAM, proporcionando taxas de transferência de dados mais rápidas e uma resposta mais ágil do sistema. Além disso, com Wi-Fi e Bluetooth integrados, você terá conectividade sem fio de alta velocidade e estabilidade para jogar online e conectar seus periféricos sem complicações.
Construída com componentes de alta qualidade, a B650M-AYW WIFI possui um design robusto que garante durabilidade e uma operação estável. O formato mATX é ideal para montagens mais compactas, sem sacrificar recursos essenciais. Seu sistema de arrefecimento eficiente garante que os componentes críticos mantenham a temperatura ideal, mesmo durante longas sessões de uso intenso.
Aproveite os recursos exclusivos da ASUS que otimizam a sua experiência. Com uma BIOS intuitiva e fácil de usar, você pode ajustar as configurações do seu sistema de forma simples e precisa. A placa-mãe também conta com diversas portas de conexão, incluindo as mais recentes, para garantir compatibilidade com todos os seus dispositivos e periféricos, oferecendo a versatilidade que você precisa para montar o PC dos seus sonhos.
`,
specs:[
  "Especificações Técnicas: Arquitetura para AMD Ryzen™ série 8000 e 7000 com chipset AMD B650 para alto desempenho",
   "Compatibilidade: Funciona com soquete AM5 e memórias DDR5 em diversos tipos de sistemas",
    "Performance e Benchmarks: Desempenho rápido para tarefas exigentes e jogos modernos",
     "Recursos Avançados: Wi-Fi e Bluetooth integrados, BIOS intuitiva e componentes de alta qualidade",
]

},
{
  id:18,
  name:"Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo",
  price:1100.00,
  category:"processador",
  images:["processador.webp",
    "processador2.webp",
    "processador3.webp"


  ],
  desc:`Quando você tem a arquitetura de processador de desktop mais avançada do mundo para jogadores e criadores de conteúdo, as possibilidades são infinitas. Esteja você jogando os jogos mais recentes, projetando o próximo prédio ou processando dados, você precisa de um processador poderoso que possa lidar com tudo - e muito mais. Sem dúvida, os processadores AMD Ryzen série 5000 definem o padrão para jogadores e artistas.
  Os processadores AMD Ryzen e as placas de vídeo AMD Radeon com Windows possibilitam a experiência definitiva de jogos por meio de gráficos superiores, desempenho incrível, recursos de segurança otimizados e suporte para os recursos mais recentes. De maneira impressionante, os ganhos de desempenho da arquitetura “Zen 3” podem ser fornecidos sem aumento no consumo de energia ou TDP. A combinação de uma arquitetura de última geração com o processo de 7 nm líder do setor dá ao AMD Ryzen série 5000 uma melhoria de + 24% de geração em eficiência energética e uma impressionante vantagem de 2,8X sobre as arquiteturas concorrentes.
  Com a avançada arquitetura “Zen 3” dos processadores AMD Ryzen Série 5000 G, você tem o desempenho de computação que os jogos imersivos exigem. A tecnologia de 7 nm é um design com alta performance e alta eficiência extraordinários, além das possibilidades poderosas de thread único ou múltiplo. Assim, você tem frames rápidos para uma melhor experiência nos jogos.
  `,
  specs:[
    "Especificações Técnicas: Arquitetura Zen 3 com clock de até 4.5GHz boost, otimizado para jogos e criação de conteúdo",
    "Compatibilidade: Desempenho de threads simples e múltiplos em sistemas com tecnologia de 7nm",
    "Performance e Benchmarks: Ideal para jogos imersivos e tarefas exigentes, com eficiência energética aprimorada"
  ]
},
{
  id:19,
  name:"Processador AMD Ryzen 5 7600X, 5.3GHz Max Turbo, Cache 38MB, AM5, 6 Núcleos, Vídeo Integrado  ",
  price:1269.99,
  category:'processador',
  images:["procesador.webp",
"processador2.webp",
"processador3.webp"
  ],
  desc:`Desempenho de jogo puro com mais de 100 FPS nos jogos mais populares do mundo.6 núcleos e 12 threads de processamento, baseados na arquitetura AMD "Zen 4". Max Boost de 5,3 GHz, desbloqueado para overclocking, cache de 38 MB, suporte a DDR5-5200.
Para a plataforma Socket AM5 de última geração, pode suportar PCIe 5.0 em placas-mãe da Série 600 selecionadas.Quando seu PC tem o processador para desktop mais avançado do mundo para gamers, você pode se concentrar no que realmente importa: ser vitorioso no campo de batalha. Esteja você jogando os títulos mais recentes ou revisitando um clássico, os processadores AMD Ryzen são uma potência de jogos com núcleos de alto desempenho. Com 6 núcleos, 12 of threads, aumento de Clock de Max Boost de até 5.3 GHz e até 38MB de cache, um desempenho revolucionário.
Esteja você renderizando em 3D uma cena com alto número de polígonos, exportando arquivos de vídeo massivos ou visualizando um sonho arquitetônico, os processadores AMD Ryzen 5 7600X foi construído para vencer o relógio. Com conectividade que economiza tempo,  tecnologia AMD EXPO, até 12 of threads de processamento e aceleradores de vídeo dedicados, eleve sua experiência.
Os novos processadores AMD Ryzen estão equipados com tecnologias de ponta para um PC moderno descomplicado. Os destaques incluem memória DDR5 de alta velocidade, overclocking de memória de um toque AMD EXPO e fabricação hipereficiente. Coloque uma placa-mãe soquete AMD AM5 no coração da sua configuração para dominar os jogos que você ama hoje e amanhã. Se o seu PC precisa das melhores e mais recentes capacidades, insista nos processadores AMD Ryzen.
  `,
  specs:["Especificações Técnicas: Arquitetura Zen 4 com boost de até 5.3 GHz, oferecendo poder de processamento.",
    "Compatibilidade: Projetado para soquete AM5, suportando PCIe 5.0 em placas selecionadas da Série 600 e memória DDR5-5200.",
    "Performance e Benchmarks: Ideal para jogos com mais de 100 FPS, criação de conteúdo e multitarefas intensivas."

  ]
},
{
  id:20,
  name:"Processador Intel Core i7-12700F, 2.1GHz (4.9GHz Max Turbo)",
  price: 1399.99,
  category:'Processador',
  images:["intel.webp",
    "intel2.webp"
  ],
  desc:`Processador Intel Core i7-12700F da 12ª Geração para desktop, sem gráficos do processador. Com Intel Turbo Boost Max Technology 3.0, compatibilidade com PCIe 5.0 e 4.0, e compatibilidade com DDR5 e DDR4, os processadores Intel Core i7 da 12ª Geração para desktop foram otimizados para gamers e produtividade, e ajudam a oferecer alto desempenho. Requer gráficos discretos. Intel Laminar RM1 incluído na caixa. Compatível com placas-mãe equipadas com chipset Intel® série 600. Potência de base do processador 65W.
  Jogo sem compromisso. A arquitetura híbrida de desempenho do processador Intel Core de 12ª geração inclui até oito núcleos de desempenho (P-core) e até quatro núcleos Efficient (E-core), com carga de trabalho encaminhada de forma inteligente pelo Intel Thread Director 2 - divide, então você pode conquistar.
  Os processadores Intel Core de 12ª geração oferecem arquitetura altamente flexível e ferramentas de overclocking líderes do setor para o máximo em personalização de desempenho.
  `,
  specs:["Especificações Técnicas: Arquitetura de 2.1GHz (até 4.9GHz com Turbo Boost) com 8 P-cores e 4 E-cores para multitarefas otimizadas",
    "Compatibilidade: Funciona com sockets LGA 1700 e chipsets Intel série 600, suportando memórias DDR5 e DDR4",
    "Performance e Benchmarks: Ideal para jogos e produtividade, com Intel Thread Director para alocação de carga de trabalho",
    "Recursos Avançados: Compatível com Intel Wi-Fi 6E e Thunderbolt 4 para conectividade rápida, com flexibilidade para overclocking"

  ]

},
{
  id:21,
  name:"Monitor Gamer ASUS TUF 27, QHD, 210Hz, 0.3ms Fast IPS, G-Sync Comp, FreeSync Premium",
  price:1299.99,
  category:'Monitor',
  images:["monitor.webp",
    "monitor2.webp",
    
    "monitor3.webp"
    

  ],
  desc:`O Monitor Gamer TUF Gaming VG27AQ5A foi meticulosamente projetado para gamers profissionais e para aqueles que buscam a jogabilidade mais imersiva e competitiva. Este monitor Fast IPS de 27 polegadas eleva o patamar de desempenho, entregando visuais nítidos e uma fluidez que elimina qualquer desvantagem no jogo.
  A Taxa de Atualização de 210Hz (OC) — Overclocked — é a chave para a vantagem competitiva, eliminando o atraso e o desfoque de movimento, essenciais em jogos de tiro em primeira pessoa, corridas, estratégia em tempo real e títulos esportivos. Esta taxa ultrarrápida permite que você jogue com as mais altas configurações visuais e reaja instantaneamente ao que está na tela. Complementando essa agilidade, a tecnologia ASUS Fast IPS proporciona um Tempo de Resposta de 0,3ms (GTG) (mínimo). Esse tempo de resposta extremamente baixo garante visuais nítidos e sem ghosting mesmo em jogos com as mais altas taxas de quadros.
  Para uma jogabilidade super suave, livre de falhas e com baixa latência, o monitor integra múltiplas tecnologias de Sincronização Adaptativa. O TUF Gaming VG27AQ5A é compatível com AMD FreeSync™ Premium e VESA AdaptiveSync, garantindo visuais sem tearing. A tecnologia exclusiva ASUS Extreme Low Motion Blur Sync (ELMB Sync) é um diferencial. O software ELMB Sync permite que o ELMB e as tecnologias de taxa de atualização variável (VRR) trabalhem simultaneamente para eliminar o ghosting e o tearing, resultando em jogos extraordinariamente nítidos mesmo com alta taxa de quadros. Essa combinação de Adaptive-sync e ELMB oferece os visuais de jogos mais suaves, rápidos e de tirar o fôlego.
  O painel Fast IPS do TUF Gaming VG27AQ5A não apenas foca na velocidade, mas também na Qualidade de Imagem Superior. Ele suporta HDR (High Dynamic Range) para oferecer cores mais vivas e níveis de contraste mais altos em comparação com monitores tradicionais. A alta faixa dinâmica é amplificada pela ampla gama de 95% DCI-P3, garantindo que o monitor ofereça cores e contraste excepcionais. Você pode selecionar entre Vários modos HDR para otimizar o visual de acordo com o cenário. O monitor possui resolução QHD (2560x1440).

  `,
  specs:[
"Tecnologia e Precisão: Fast IPS com 1ms (GTG) / 0.3ms e 210Hz para resposta rápida e visualizações claras",
"Design e Ergonomia: 27 QHD com inclinação ajustável e montagem VESA, projetado para conforto e flexibilidade",
"Conectividade: DisplayPort 1.4, HDMI 2.0 e USB 3.2, oferecendo versatilidade na conexão de dispositivos",
"Recursos Especiais: Adaptive-Sync, HDR10 e ELMB Sync para jogabilidade fluida e imagens aprimoradas",

  ]
},
{
  id:22,
  name:"Monitor Gamer Dell Alienware 27, QHD, 180Hz",
  price:2399.90,
  category:'Monitor',
  images:["moni.jpg",
  "moni2.jpg",
  "moni3.jpg",
  "moni4.jpg"],
  desc:`Eleve sua experiência de jogo a um patamar lendário com o Monitor Gamer Alienware AW2725DM. Projetado para quem não aceita nada menos que a perfeição, este monitor de 27 polegadas com resolução QHD (2560 x 1440) entrega imagens incrivelmente nítidas e detalhadas, permitindo que você veja cada detalhe do campo de batalha. A imersão é total, e a vantagem competitiva é sua.
  Com uma taxa de atualização de 180Hz e um tempo de resposta de apenas 1ms no modo extremo, o AW2725DM garante que cada movimento seja renderizado com uma clareza impecável. A tecnologia de painel Fast IPS combina o melhor dos dois mundos: a velocidade que você precisa para competir em alto nível e a fidelidade de cores que torna cada jogo uma obra de arte visual.
  Não importa qual seja a sua placa de vídeo, este monitor está pronto. Totalmente compatível com NVIDIA® G-SYNC®, AMD FreeSync™ e VESA AdaptiveSync, ele sincroniza a taxa de atualização do monitor com a sua GPU. O resultado é uma jogabilidade ultrafluida, livre de "screen tearing" e engasgos, para que sua única preocupação seja a vitória.
  O design inconfundível da Alienware não só embeleza seu setup, mas também oferece ergonomia completa com ajustes de altura, inclinação, rotação e pivô. Encontre o ângulo de visão perfeito para maratonas de jogos confortáveis. Além disso, com múltiplas portas DisplayPort, HDMI e um hub USB de alta velocidade, conectar todos os seus periféricos nunca foi tão fácil e organizado.`,
specs:[
  "Tecnologia e Precisão: Fast IPS com 1ms de resposta e 180Hz, assegurando clareza e fluidez",
    "Design e Ergonomia: Design Alienware com ajustes de altura, inclinação, rotação e pivô para conforto",
  "Conectividade: DisplayPort e HDMI, mais hub USB para conectar periféricos de forma organizada",
  "Recursos Especiais: NVIDIA G-SYNC, AMD FreeSync e VESA AdaptiveSync, para sincronização de imagem",

]

}

  ];

 
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const product = products.find(p => p.id === id);

  if (!product) {
    document.body.innerHTML = "<h2 style='padding:40px'>Produto não encontrado</h2>";
    return;
  }

  // ===============================
  // RENDERIZA PRODUTO
  // ===============================
  
  document.title = `${product.name} • NeonGear`;

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = `R$ ${product.price.toFixed(2)}`;
  document.getElementById("productStock").textContent = product.stock;

  // Descrição com HTML
  document.getElementById("productDesc").innerHTML = product.desc;

  // Renderizar especificações
  const specsList = document.getElementById("productSpecs");
  specsList.innerHTML = "";
  product.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Imagens
  const mainImage = document.getElementById("mainImage");
  const gallery = document.querySelector(".image-gallery");
  
  gallery.innerHTML = "";
  
  if (product.images && product.images.length > 0) {
    mainImage.src = product.images[0];
  
    product.images.forEach((src, index) => {
      const thumb = document.createElement("img");
      thumb.src = src;
  
      if (index === 0) thumb.classList.add("active");
  
      thumb.addEventListener("click", () => {
        mainImage.src = src;
  
        document
          .querySelectorAll(".image-gallery img")
          .forEach(img => img.classList.remove("active"));
  
        thumb.classList.add("active");
      });
  
      gallery.appendChild(thumb);
   });
  
} else {
  mainImage.src = product.image;
}

// ===============================
// FUNÇÃO TOAST
// ===============================
function showToast(message, icon = "✅") {
  // Remove toast anterior se existir
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Cria novo toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Remove após 3 segundos
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===============================
// CARRINHO
// ===============================
const btnAdd = document.getElementById("addToCart");
btnAdd.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(p => p.id === product.id);
  
  if (item) {
    item.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images ? product.images[0] : product.image,
      qty: 1
    });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  
  // Toast ao invés de alert
  showToast("Produto adicionado ao carrinho!", "🛒");
});

});