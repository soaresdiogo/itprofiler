export const profiles = [
  {
    id: 'backend',
    name: { pt: 'Desenvolvedor Backend', en: 'Backend Developer' },
  },
  {
    id: 'frontend',
    name: { pt: 'Desenvolvedor Frontend', en: 'Frontend Developer' },
  },
  { id: 'tester', name: { pt: 'Tester', en: 'Tester' } },
  { id: 'designer', name: { pt: 'Designer UI/UX', en: 'Designer UI/UX' } },
  { id: 'devops', name: { pt: 'DevOps', en: 'DevOps' } },
  {
    id: 'data-scientist',
    name: { pt: 'Cientista de Dados', en: 'Data Scientist' },
  },
  { id: 'infra', name: { pt: 'Infraestrutura', en: 'Infrastructure' } },
  { id: 'manager', name: { pt: 'Gerente', en: 'Manager' } },
  { id: 'security', name: { pt: 'Segurança/Auditor', en: 'Security/Auditor' } },
];

export const questions = [
  {
    id: 1,
    text: {
      pt: 'Você gosta de programar e resolver problemas?',
      en: 'Do you enjoy programming and solving problems?',
    },
    relatedProfiles: ['backend', 'frontend', 'tester'],
  },
  {
    id: 2,
    text: {
      pt: 'Prefere trabalhar com servidores ou bancos de dados?',
      en: 'Do you prefer working with servers or databases?',
    },
    relatedProfiles: ['backend', 'data-analyst'],
  },
  {
    id: 3,
    text: {
      pt: 'Gosta de entender como um sistema funciona por dentro?',
      en: 'Do you enjoy understanding how a system works internally?',
    },
    relatedProfiles: ['backend', 'systems-analyst'],
  },
  {
    id: 4,
    text: {
      pt: 'Prefere criar interfaces e experiências para o usuário?',
      en: 'Do you prefer creating interfaces and user experiences?',
    },
    relatedProfiles: ['frontend', 'designer'],
  },
  {
    id: 5,
    text: {
      pt: 'Tem interesse em aprender sobre automação de testes?',
      en: 'Are you interested in learning about test automation?',
    },
    relatedProfiles: ['tester', 'backend'],
  },
  {
    id: 6,
    text: {
      pt: 'Prefere trabalhar com hardware e infraestrutura?',
      en: 'Do you prefer working with hardware and infrastructure?',
    },
    relatedProfiles: ['networks', 'infrastructure'],
  },
  {
    id: 7,
    text: {
      pt: 'Está familiarizado com conceitos de redes?',
      en: 'Are you familiar with networking concepts?',
    },
    relatedProfiles: ['networks', 'infrastructure', 'security'],
  },
  {
    id: 8,
    text: {
      pt: 'Gosta de investigar vulnerabilidades em sistemas?',
      en: 'Do you enjoy investigating system vulnerabilities?',
    },
    relatedProfiles: ['security', 'auditor'],
  },
  {
    id: 9,
    text: {
      pt: 'Tem interesse em criptografia e proteção de dados?',
      en: 'Are you interested in encryption and data protection?',
    },
    relatedProfiles: ['security', 'auditor'],
  },
  {
    id: 10,
    text: {
      pt: 'Prefere explorar tecnologias emergentes?',
      en: 'Do you prefer exploring emerging technologies?',
    },
    relatedProfiles: ['backend', 'networks', 'data-analyst', 'security'],
  },
  {
    id: 11,
    text: {
      pt: 'Gosta de criar fluxogramas ou diagramas para sistemas?',
      en: 'Do you enjoy creating flowcharts or diagrams for systems?',
    },
    relatedProfiles: ['systems-analyst', 'tester', 'auditor'],
  },
  {
    id: 12,
    text: {
      pt: 'Consegue identificar padrões ou tendências em dados?',
      en: 'Can you identify patterns or trends in data?',
    },
    relatedProfiles: ['data-analyst', 'backend'],
  },
  {
    id: 13,
    text: {
      pt: 'Gosta de organizar e interpretar grandes volumes de dados?',
      en: 'Do you enjoy organizing and interpreting large volumes of data?',
    },
    relatedProfiles: ['data-analyst', 'security'],
  },
  {
    id: 14,
    text: {
      pt: 'Prefere seguir metodologias como Agile ou Scrum?',
      en: 'Do you prefer following methodologies like Agile or Scrum?',
    },
    relatedProfiles: ['project-manager', 'tester'],
  },
  {
    id: 15,
    text: {
      pt: 'Você gosta de documentar processos e requisitos?',
      en: 'Do you like documenting processes and requirements?',
    },
    relatedProfiles: ['systems-analyst', 'auditor'],
  },
  {
    id: 16,
    text: {
      pt: 'Prefere trabalhar com análise de logs de sistemas?',
      en: 'Do you prefer working with system log analysis?',
    },
    relatedProfiles: ['auditor', 'security'],
  },
  {
    id: 17,
    text: {
      pt: 'Gosta de entender o impacto de cada parte de um sistema no todo?',
      en: 'Do you like understanding the impact of each part of a system on the whole?',
    },
    relatedProfiles: ['systems-analyst', 'project-manager'],
  },
  {
    id: 18,
    text: {
      pt: 'Se sente confortável analisando problemas complexos?',
      en: 'Do you feel comfortable analyzing complex problems?',
    },
    relatedProfiles: ['systems-analyst', 'tester', 'security'],
  },
  {
    id: 19,
    text: {
      pt: 'Gosta de propor melhorias em processos existentes?',
      en: 'Do you like proposing improvements to existing processes?',
    },
    relatedProfiles: ['project-manager', 'auditor'],
  },
  {
    id: 20,
    text: {
      pt: 'Você prefere tarefas analíticas e bem definidas?',
      en: 'Do you prefer analytical and well-defined tasks?',
    },
    relatedProfiles: ['data-analyst', 'tester'],
  },
  {
    id: 21,
    text: {
      pt: 'Prefere trabalhar com cores, formas e tipografia?',
      en: 'Do you prefer working with colors, shapes, and typography?',
    },
    relatedProfiles: ['designer', 'frontend'],
  },
  {
    id: 22,
    text: {
      pt: 'Gosta de criar designs para aplicativos ou sites?',
      en: 'Do you enjoy designing apps or websites?',
    },
    relatedProfiles: ['designer', 'frontend'],
  },
  {
    id: 23,
    text: {
      pt: 'Tem interesse em criar animações ou interações de interface?',
      en: 'Are you interested in creating animations or interface interactions?',
    },
    relatedProfiles: ['designer', 'frontend'],
  },
  {
    id: 24,
    text: {
      pt: 'Prefere inovar nas soluções para problemas de TI?',
      en: 'Do you prefer innovating in solutions to IT problems?',
    },
    relatedProfiles: ['designer', 'systems-analyst'],
  },
  {
    id: 25,
    text: {
      pt: 'Você se sente mais confortável criando projetos visuais?',
      en: 'Do you feel more comfortable creating visual projects?',
    },
    relatedProfiles: ['designer'],
  },
  {
    id: 26,
    text: {
      pt: 'Prefere liderar equipes e projetos?',
      en: 'Do you prefer leading teams and projects?',
    },
    relatedProfiles: ['project-manager', 'auditor'],
  },
  {
    id: 27,
    text: {
      pt: 'Gosta de planejar cronogramas e acompanhar entregas?',
      en: 'Do you enjoy planning schedules and tracking deliveries?',
    },
    relatedProfiles: ['project-manager', 'systems-analyst'],
  },
  {
    id: 28,
    text: {
      pt: 'Tem interesse em resolver conflitos dentro de equipes?',
      en: 'Are you interested in resolving team conflicts?',
    },
    relatedProfiles: ['project-manager'],
  },
  {
    id: 29,
    text: {
      pt: 'Você gosta de acompanhar o progresso de tarefas e fazer ajustes?',
      en: 'Do you enjoy tracking task progress and making adjustments?',
    },
    relatedProfiles: ['project-manager', 'auditor'],
  },
  {
    id: 30,
    text: {
      pt: 'Prefere negociar com stakeholders ou clientes?',
      en: 'Do you prefer negotiating with stakeholders or clients?',
    },
    relatedProfiles: ['project-manager'],
  },
  {
    id: 31,
    text: {
      pt: 'Prefere investigar incidentes e riscos?',
      en: 'Do you prefer investigating incidents and risks?',
    },
    relatedProfiles: ['security', 'auditor'],
  },
  {
    id: 32,
    text: {
      pt: 'Gosta de trabalhar com normas como ISO ou COBIT?',
      en: 'Do you enjoy working with standards like ISO or COBIT?',
    },
    relatedProfiles: ['auditor', 'security'],
  },
  {
    id: 33,
    text: {
      pt: 'Prefere criar políticas e diretrizes de segurança?',
      en: 'Do you prefer creating security policies and guidelines?',
    },
    relatedProfiles: ['security', 'auditor'],
  },
  {
    id: 34,
    text: {
      pt: 'Se interessa em proteger sistemas contra ataques?',
      en: 'Are you interested in protecting systems from attacks?',
    },
    relatedProfiles: ['security', 'networks'],
  },
  {
    id: 35,
    text: {
      pt: 'Prefere revisar acessos e permissões em sistemas?',
      en: 'Do you prefer reviewing accesses and permissions in systems?',
    },
    relatedProfiles: ['security', 'auditor'],
  },
  {
    id: 36,
    text: {
      pt: 'Prefere trabalhar individualmente em vez de em equipe?',
      en: 'Do you prefer working individually rather than in a team?',
    },
    relatedProfiles: ['backend', 'tester'],
  },
  {
    id: 37,
    text: {
      pt: 'Gosta de colaborar com diversas áreas de um projeto?',
      en: 'Do you enjoy collaborating with different areas of a project?',
    },
    relatedProfiles: ['project-manager', 'systems-analyst'],
  },
  {
    id: 38,
    text: {
      pt: 'Você gosta de aprender coisas novas com frequência?',
      en: 'Do you enjoy learning new things frequently?',
    },
    relatedProfiles: [
      'backend',
      'frontend',
      'tester',
      'designer',
      'data-analyst',
      'security',
      'networks',
    ],
  },
  {
    id: 39,
    text: {
      pt: 'Prefere tarefas práticas a teóricas?',
      en: 'Do you prefer practical tasks over theoretical ones?',
    },
    relatedProfiles: ['networks', 'tester', 'security'],
  },
  {
    id: 40,
    text: {
      pt: 'Gosta de se especializar em uma área específica?',
      en: 'Do you enjoy specializing in a specific area?',
    },
    relatedProfiles: ['backend', 'networks', 'security'],
  },
  {
    id: 41,
    text: {
      pt: 'Você gosta de resolver problemas sob pressão?',
      en: 'Do you enjoy solving problems under pressure?',
    },
    relatedProfiles: ['networks', 'security', 'tester'],
  },
  {
    id: 42,
    text: {
      pt: 'Prefere seguir padrões definidos?',
      en: 'Do you prefer following defined standards?',
    },
    relatedProfiles: ['tester', 'auditor'],
  },
  {
    id: 43,
    text: {
      pt: 'Gosta de resolver problemas detalhadamente?',
      en: 'Do you enjoy solving problems in detail?',
    },
    relatedProfiles: ['tester', 'security'],
  },
  {
    id: 44,
    text: {
      pt: 'Tem facilidade em delegar tarefas para os outros?',
      en: 'Do you find it easy to delegate tasks to others?',
    },
    relatedProfiles: ['project-manager'],
  },
  {
    id: 45,
    text: {
      pt: 'Gosta de criar soluções a partir de dados?',
      en: 'Do you enjoy creating solutions based on data?',
    },
    relatedProfiles: ['data-analyst', 'backend'],
  },
  {
    id: 46,
    text: {
      pt: 'Você se interessa por melhorar a experiência de usuários?',
      en: 'Are you interested in improving user experiences?',
    },
    relatedProfiles: ['designer', 'frontend'],
  },
  {
    id: 47,
    text: {
      pt: 'Prefere investigar erros até encontrar a causa raiz?',
      en: 'Do you prefer investigating errors to find the root cause?',
    },
    relatedProfiles: ['tester', 'auditor'],
  },
  {
    id: 48,
    text: {
      pt: 'Se sente mais confortável trabalhando com sistemas já existentes?',
      en: 'Do you feel more comfortable working with existing systems?',
    },
    relatedProfiles: ['networks', 'tester'],
  },
  {
    id: 49,
    text: {
      pt: 'Gosta de implementar inovações tecnológicas?',
      en: 'Do you enjoy implementing technological innovations?',
    },
    relatedProfiles: ['security', 'networks', 'backend'],
  },
  {
    id: 50,
    text: {
      pt: 'Prefere trabalhar em um ambiente dinâmico e com mudanças constantes?',
      en: 'Do you prefer working in a dynamic environment with constant changes?',
    },
    relatedProfiles: ['project-manager', 'tester', 'networks'],
  },
];
