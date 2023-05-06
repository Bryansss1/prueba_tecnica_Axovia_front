export const resetData=({name,description,price,combo_price,size,topping_type})=>{

    if(size=="L")size="Grande"
    if(size=="M")size="Mediano"
    if(size=="S")size="Pequeño"

    if(topping_type=="0")topping_type="Fondeau"
    if(topping_type=="1")topping_type="Betun Italiano"
    if(topping_type=="2")topping_type="Chantilly"


price=Number(price)
combo_price=Number(combo_price)
const capitalize=name.slice(0,1).toUpperCase()

const reset={
name:capitalize+name.slice(1, name.length),
size,
description,
price:'$' + price.toFixed(2),
topping_type,
combo_price:'$' + combo_price.toFixed(2),
}
return reset
}