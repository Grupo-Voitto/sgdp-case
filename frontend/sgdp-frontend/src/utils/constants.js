export const bodyProject = [
  {
    type: "TI",
    title: "Chatbot",
    progresso: 10,
    id:1,
    color: "#FEB95A",
    data_entrega: "2024-05-19"
  },
  {
    type: "Marketing",
    title: "Leads",
    progresso: 48,
    id:2,
    color: "#A9DFD8",
    data_entrega: "2024-05-30",
    descricao:"O projeto de Chatbot Construprime visa desenvolver um assistente virtual para facilitar a interação com os clientes da empresa. O chatbot será projetado para fornecer informações sobre produtos, preços, prazos de entrega e serviços oferecidos pela Construprime. Utilizando inteligência artificial, o chatbot será capaz de responder perguntas frequentes e auxiliar os usuários a encontrarem as informações de que precisam de forma rápida e eficiente. Este projeto busca melhorar a experiência do cliente e otimizar o atendimento ao consumidor na área de construção civil.",
    membros:[
      {
        id:1,
        nome: "Renata"
      },
      {
        id:2,
        nome: "Diego"
      },
      {
        id:3,
        nome: "Marcelo"
      },
    ],
    tarefas: [
      {
        id: 1,
        descricao:"Desenvolvimento da interface do chatbot com design responsivo para integração nos canais de comunicação da empresa.",
        membro_id: 2,
        status: 1

      },
      {
        id: 2,
        descricao:"Implementação da inteligência artificial para reconhecimento e processamento de linguagem natural.",
        membro_id: 2,
        status: 0
      },
      {
        id: 3,
        descricao:"Testes de usabilidade e correção de bugs do chatbot em ambiente controlado.",
        membro_id: 1,
        status: 1
      }
    ]
  },
  {
    type: "Comercial",
    title: "Vende e Vende",
    progresso: 22,
    id: 3,
    color: "#F2C8ED",
    data_entrega: "2024-06-12"
  },
  {
    type: "RH",
    title: "chama Pessoa",
    progresso: 33,
    id:3,
    color: "#20AEF3",
    data_entrega: "2024-06-01"
  },
]