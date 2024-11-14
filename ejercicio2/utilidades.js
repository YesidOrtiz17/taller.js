let calcularDescuento=(descuentito)=>{
    let resul=(descuentito>1000)?"el descuento es del 20%": (descuentito>=500 & descuentito<=1000)?"el descuento es del 10%": (descuentito<500)?"no se aplica descuento":""
    return resul
}
export {calcularDescuento}