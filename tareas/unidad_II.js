function getZodiacSign(month, day) {
  if (
    typeof month !== 'number' ||
    typeof day !== 'number' ||
    isNaN(month) ||
    isNaN(day)
  ) {
    throw new Error('Ambos parÃ¡metros deben ser nÃºmeros');
  }

  if (month < 1 || month > 12) {
    throw new Error('Mes incorrecto')
  }

  const endDayMonth = getEndDayMonth(month)
  if (day > endDayMonth) {
    throw new Error('No es un dia valido del mes');
  }
  const signs = [
    {month: 1, limit: 20, name: "Capricornio"},
    {month: 2, limit: 19, name: "Acuario"},
    {month: 3, limit: 20, name: "Piscis"},
    {month: 4, limit: 20, name: "Aries"},
    {month: 5, limit: 21, name: "Tauro"},
    {month: 6, limit: 21, name: "GÃ©minis"},
    {month: 7, limit: 22, name: "CÃ¡ncer"},
    {month: 8, limit: 22, name: "Leo"},
    {month: 9, limit: 22, name: "Virgo"},
    {month: 10, limit: 22, name: "Libra"},
    {month: 11, limit: 21, name: "Escorpio"},
    {month: 12, limit: 21, name: "Sagitario"},
  ];

  const signIndex = signs.findIndex(
    sign => sign.month === month
  )
  let sign = signs[signIndex];
  if (day > sign.limit && month < 12) {
    sign = signs[signIndex + 1]
  }
  if (day > sign.limit && month === 12) {
    sign = signs[0]
  }
  return sign.name
}

/**
 * @param {number} month
 */
function getEndDayMonth(month) {
  if (typeof month !== 'number') {
    throw new Error(`el parametro mes debe ser un numero`);
  }
  return new Date(new Date().getFullYear(), month, 0).getDate()
}

addEventListener("load", () => {
  const monthSelect = Number(prompt(`
    Escribre un mes en numeros \n
    1 - Enero
    2 - Febrero
    3 - Marzo
    4 - Abril
    5 - Mayo
    6 - Junio
    7 - Julio
    8 - Agosto
    9 - Septiembre
    10 - Octubre
    11 - Noviembre
    12 - Diciembre
  `))
  const daySelect = Number(prompt("Escriba un dia en numero "))
  try {
    const sign = getZodiacSign(monthSelect, daySelect)
    alert(`
      Eres signo : ${sign}
    `)
  } catch (e) {
    alert(e.message)
  }
})
