// import { HelpCircle, MessageSquare, Settings } from "lucide-react";

// export interface FAQItem {
//     question: string;
//     answer: string;
//     likes: number;
// }

// export interface FAQCategory {
//     id: string;
//     title: string;
//     // icon: React.ReactNode;
//     questions: FAQItem[];
// }

// export const faqCategories: FAQCategory[] = [
//     {
//         id: "general",
//         title: "Geral",
//         // icon: <HelpCircle className="w-4 h-4" />,
//         questions: [
//             {
//                 question: "Como posso iniciar um novo projeto?",
//                 answer: "Você pode iniciar um novo projeto entrando em contato através do nosso formulário ou agendando uma reunião inicial. Nós guiaremos você por todo o processo desde a concepção até a entrega.",
//                 likes: 24
//             },
//             {
//                 question: "Quais são os métodos de pagamento aceitos?",
//                 answer: "Aceitamos diversas formas de pagamento incluindo cartão de crédito, transferência bancária, PIX e parcelamento em até 12x para projetos de maior valor.",
//                 likes: 18
//             },
//             {
//                 question: "Qual o prazo médio para desenvolvimento?",
//                 answer: "O prazo varia conforme a complexidade do projeto. Aplicativos simples podem levar 2-3 meses, enquanto sistemas complexos podem requerer 6 meses ou mais. Entregamos em fases com sprints de 2 semanas.",
//                 likes: 32
//             }
//         ]
//     },
//     {
//         id: "technical",
//         title: "Técnico",
//         // icon: <Settings className="w-4 h-4" />,
//         questions: [
//             {
//                 question: "Quais tecnologias vocês utilizam?",
//                 answer: "Trabalhamos com as principais tecnologias modernas como React, Next.js, Node.js, Python, Flutter, e bancos de dados SQL e NoSQL. Escolhemos a stack técnica mais adequada para cada projeto.",
//                 likes: 45
//             },
//             {
//                 question: "Vocês fazem integração com outras APIs?",
//                 answer: "Sim, temos vasta experiência em integração com APIs de terceiros como pagamento, geolocalização, redes sociais e sistemas legados. Garantimos segurança e estabilidade nessas integrações.",
//                 likes: 29
//             },
//             {
//                 question: "Como é o processo de deploy e hospedagem?",
//                 answer: "Utilizamos infraestrutura escalável em cloud (AWS, Google Cloud ou Azure) com CI/CD automatizado. Você pode optar por nossa hospedagem gerenciada ou receber o projeto para deploy em seu próprio servidor.",
//                 likes: 37
//             }
//         ]
//     },
//     {
//         id: "support",
//         title: "Suporte",
//         // icon: <MessageSquare className="w-4 h-4" />,
//         questions: [
//             {
//                 question: "Qual o tempo de resposta do suporte?",
//                 answer: "Nosso tempo médio de resposta é de 2 horas úteis para questões críticas e 24 horas para demais solicitações. Oferecemos diferentes planos de suporte conforme sua necessidade.",
//                 likes: 15
//             },
//             {
//                 question: "Vocês oferecem treinamento?",
//                 answer: "Não, não realizamos treinamento.",
//                 likes: 22
//             },
//             {
//                 question: "Há custos adicionais para manutenção?",
//                 answer: "Oferecemos planos de manutenção mensais que incluem atualizações, correções e suporte. O valor varia conforme a complexidade do projeto e nível de serviço desejado.",
//                 likes: 19
//             }
//         ]
//     }
// ]