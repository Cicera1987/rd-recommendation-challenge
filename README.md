# 🚀 Teste Técnico - Recomendador de Produtos RD Station

Este projeto foi desenvolvido como parte do **teste técnico** para a vaga de **Desenvolvedor(a) Front-end** na **RD Station**.  
O objetivo principal é implementar a **lógica de recomendação de produtos RD Station** em uma aplicação web existente, integrando a funcionalidade ao layout e fluxo já definidos.

---

## 🎯 Missão

Desenvolver a funcionalidade central de **recomendação de produtos** dentro de uma aplicação **React.js** pré-existente.  
A aplicação permite que os usuários selecionem suas preferências e funcionalidades desejadas, recebendo **recomendações de produtos personalizadas** com base em suas escolhas.

---

## 🧩 Contexto

- Parte do processo seletivo para **Desenvolvedor(a) Front-end** na RD Station.  
- Estrutura básica construída com **React.js** e **json-server**.  
- Foco na implementação da **lógica de recomendação** e integração com a interface existente.  
- Layout desenvolvido utilizando **Tailwind CSS**.  

---

## 🛠️ Tecnologias Utilizadas

- **React.js** → Desenvolvimento do front-end.  
- **json-server** → Simulação de um servidor RESTful com dados de produtos.  
- **Tailwind CSS** → Estilização e layout responsivo.  
- **Lerna** → Gerenciamento de workspaces (frontend e backend).  
- **Concurrently** → Execução simultânea do backend e frontend.  

---

## ⚙️ Requisitos Técnicos

### Familiaridade com Tailwind CSS
O layout da aplicação foi desenvolvido com **Tailwind CSS**.  
Familiaridade básica com este framework é útil para ajustes e entendimento da estrutura visual.

### Versão do Node.js
Este projeto requer **Node.js v18.3** ou superior.

#### Instalação (opcional):
- Usando **n**:  
  ```bash
  npm install -g n
  n 18.3

| Arquivo                     | Função                                                                                                     |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `App.js`                    | Atualiza a lista de recomendações ao receber as preferências do usuário.                                   |
| `Form.js`                   | Processa as entradas do formulário e envia as preferências para o serviço de recomendação.                 |
| `recommendation.service.js` | Implementa a lógica que determina quais produtos devem ser recomendados com base nos critérios do usuário. |

#### Lógica de Recomendação

1. O usuário seleciona preferências e funcionalidades desejadas.
2. A aplicação processa esses dados e os compara com os produtos disponíveis na API simulada (json-server).
3. Dependendo do tipo de recomendação:
- SingleProduct → retorna o produto mais compatível.
- MultipleProducts → retorna uma lista de produtos compatíveis.
4. Em caso de empate, o último produto que atende aos critérios é retornado.

#### Requisitos do Projeto

- Implementar a lógica de recomendação baseada nas preferências do usuário.
- Utilizar React.js para o desenvolvimento do front-end.
- Consumir dados de produtos a partir do json-server.
- Seguir boas práticas de código e organização.
- Implementar testes unitários para as funcionalidades desenvolvidas.

#### Como Executar o Projeto

git clone <URL_DO_REPOSITORIO>
npm install
npm run dev


#### Scripts Disponíveis

Script	Descrição
npm start	Inicia a aplicação React em modo de desenvolvimento.
npm run start:frontend	- Inicia apenas o frontend.
npm run start:backend	- Inicia apenas o backend (json-server).
npm run dev	 - Inicia frontend e backend simultaneamente.

#### Critérios de Aceite

- O serviço de recomendação deve receber as preferências e funcionalidades desejadas do usuário.
- Deve retornar recomendações com base nas preferências selecionadas.
- O modo SingleProduct retorna um único produto.
- O modo MultipleProducts retorna uma lista de produtos compatíveis.
- Em caso de empate, o último produto válido deve ser retornado.
- Deve lidar com diferentes tipos de preferências e funcionalidades.
- O serviço deve ser modular e facilmente extensível.

### Autor

Desenvolvido por [Cicera Ribeiro]
📧 [cicera.ribeiro@rede.ulbra.br]

🔗 https://github.com/Cicera1987

🔗 https://www.linkedin.com/in/cicera-ribeiro-/

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
