# Controle de Passagens Aéreas - Projeto Integrador 2

Bem-vindo ao repositório do Projeto Integrador 2 da disciplina de Controle de Passagem Aérea na PUC-Campinas, correspondente ao semestre de agosto de 2023. Este projeto visa integrar diversos conhecimentos adquiridos durante o semestre, abrangendo programação web, banco de dados, processos de Engenharia, estrutura de dados e algoritmos de programação.

## Objetivo do Projeto

O Projeto Integrador 2 tem como propósito combinar habilidades técnicas e práticas de gestão de equipe, planejamento, desenvolvimento, documentação e apresentação de projetos. As equipes, autogerenciáveis, serão orientadas pelo professor orientador, atuando como diretor das equipes, fornecendo direção e assistência na gestão do próprio projeto.

## Funcionalidades

### Módulo 1: Interface Administrativa da Companhia Aérea

O painel administrativo web permite que o administrador gerencie diversos cadastros, incluindo:

- Aeronaves da Companhia (modelo, número de identificação, fabricante, ano de fabricação, mapa de assentos).
- Aeroportos e Cidades (com relacionamento entre essas duas tabelas).
- Trechos (Trajetos) que a Companhia aérea opera, exemplo: Campinas -> São Paulo e São Paulo -> Campinas.
- O cadastro dos voos (data, trecho, horário previsto de partida e chegada, aeroporto de saída e chegada). Cada voo terá um valor único por assento.

**Para fins de teste, o painel administrativo deve ser alimentado com pelo menos 10 aeronaves, 20 aeroportos, 15 trechos e 40 voos até o final de 2023.**

### Módulo 2: Interface do Cliente da Companhia Aérea

O módulo destinado aos consumidores finais oferece a possibilidade de consulta e simulação de compra de passagens aéreas, com recursos como:

- **Busca de Voos:**
  - Escolha do tipo de passagem: ida e volta ou somente ida.
  - Seleção de datas de ida e, se aplicável, de retorno.
  - Escolha de Cidade / Aeroporto de Origem e Cidade / Aeroporto de Destino.
  - Exibição das opções de voo para que o usuário escolha e prossiga para a próxima etapa que será a compra.

- **Reserva de Assentos:**
  - Após a escolha do voo, o sistema apresentará um mapa interativo de assentos da aeronave.
  - Todos os assentos são considerados iguais.
  - A interface destaca o assento escolhido pelo usuário e desabilita assentos reservados.

- **Conclusão do Pagamento:**
  - O usuário escolhe a forma de pagamento (PIX ou cartão de crédito), informa nome completo e e-mail.
  - Simulação de cenários: pagamento aprovado, transação não autorizada e erro técnico amigável.
  - Se a compra for aprovada, a passagem aérea é armazenada no banco, e os assentos reservados são registrados.
  - Exibição de uma mensagem informativa final: "Sua passagem aérea foi emitida e enviada para seu endereço de e-mail."

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript/TypeScript
- Node.js
- Oracle
- Git
