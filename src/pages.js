const Database =require('./database/db');
const saveKennel = require('./database/saveKennel');


module.exports = {

  index(req, res){
    return res.render("index");
  },

  async kennel(req, res){
    const id = req.query.id;
    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM kennels WHERE id = "${id}"`);
      const kennel = results[0]

      kennel.images = kennel.images.split(",");
      kennel.firstImage = kennel.images[0];

      if(kennel.open_on_weekends == "0"){
        kennel.open_on_weekends = false
      } else {
        kennel.open_on_weekends = true;
      }

      return res.render("kennel", {kennel});
      
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de Dados")
    }

    

  },

  async kennels(req, res){
    try {
      const db = await Database;
      const kennels = await db.all("SELECT * FROM kennels")
      return res.render("kennels", {kennels})

    } catch(error){
      console.log(error)
      return res.send("Erro no Banco de dados!")
    } 

  },

  createKennel(req, res){
    return res.render("create-kennel");

  },

  async saveKennel(req, res){
    const fields = req.body

    //validar se todos os campos estão preenchidos
    if(Object.values(fields).includes('')){
      return res.send("Todos os campos devem ser preenchidos")
    }

    try { 

      //salvar um canil
      const db = await Database;
      await saveKennel(db, {
        latitude: fields.latitude,
        longitude: fields.longitude,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends
      })

      //Redirecionamento

      return res.redirect('/kennels')
      
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
   

  }
}