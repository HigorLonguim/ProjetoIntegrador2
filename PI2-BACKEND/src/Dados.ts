// vamos definir um tipo chamado Dados. 
// vai representar para nós a estrutura de dados do que é um dados.
// para usarmos esse tipo em qualquer outro código devemos exportá-lo usando a palavra
// export, veja: 

export type Dado = {
    idVoo?: number,
    dataSaida?: string,
    dataChegada?: string,
    valor?: number,
    modelo?: string,
    origem?: string,
    destino?: string,
}