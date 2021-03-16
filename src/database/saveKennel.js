function saveKennel(db, kennel){
  return db.run(`
  INSERT INTO kennels (
    latitude,
    longitude,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
  ) VALUES (
    "${kennel.latitude}",
    "${kennel.longitude}",
    "${kennel.name}",
    "${kennel.about}",
    "${kennel.whatsapp}",
    "${kennel.images}",
    "${kennel.instructions}",
    "${kennel.opening_hours}",
    "${kennel.open_on_weekends}"
  )
`)
}

module.exports = saveKennel;

