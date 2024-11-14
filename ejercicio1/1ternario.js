let enRango=(num)=>{
    let resultado= (num>10 && num<50)? "esta dentro del rango": "esta fuera del rango"
    return resultado
}
console.log(enRango(16))
console.log(enRango(70))