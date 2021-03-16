const Database = require("./db");
const saveKennel = require("./saveKennel");

Database.then(async (db) => {
  // Inserir dados na tabela
  await saveKennel(db,  {
    latitude: "-2.5072239",
    longitude:"-44.2966627",
    name: 'AMADA - Associação Maranhense em Defesa dos Animais',
    about: 'Associação civil de direito privado, de caráter não governamental, com personalidade jurídica, sem fins lucrativos, que visa à construção de uma sociedade livre, justa e solidária, que busca garantir os direitos e deveres dos animais e o respeito a um meio ambiente ecologicamente equilibrado e sadio, garantindo qualidade de vida ',
    whatsapp: "(98)98881-8232",
    images: [
      "https://statig2.akamaized.net/bancodeimagens/8n/ue/ky/8nuekyupkfl91azncpbf76fsq.jpg",
      "https://diariodorio.com/wp-content/uploads/2019/06/05flx89pq6dmakwdgppntbssc.jpg",     
      "https://bompracachorro.blogfolha.uol.com.br/files/2019/08/641A7F12-9AF5-4EE4-B49F-B30C4CCEA3F2.jpeg",
      "https://blog.finofaro.com.br/wp-content/uploads/2018/06/finofaro-750x405.jpg",
      "https://conexaoplaneta.com.br/wp-content/uploads/2017/11/domingo-evento-adocao-animais-sao-paulo-conexao-planeta.jpg",
      "https://meusanimais.com.br/wp-content/uploads/2016/05/ado%C3%A7%C3%A3o-de-filhotes.jpg" 
    ].toString(),
    instructions:"Saiba nossos horários de visitação e agende conosco uma visita",
    opening_hours:"Horário de visitas: 07:00 às 19:00",
    open_on_weekends:"0"
  });

  // //Consultar dados da tabela
  const selectedKennels = await db.all("SELECT * FROM kennels");
  console.log(selectedKennels);

  // // //Consultar somente um canil, pelo id
  const kennel = await db.all("SELECT * FROM kennels WHERE id = '1'");
  console.log(kennel);

  // //Apagar um dado da tabela
  // console.log(await db.run("DELETE FROM kennels WHERE id = '1'"));
  // console.log(await db.run("DELETE FROM kennels WHERE id = '1'"));
});
