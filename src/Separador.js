function Separar_Codigo(cod1) {

    let numString = String(cod1);
    const array = []    

    for(var i = 0;i<numString.length;i++) {
        let valInsert = +numString.charAt(i);
        array.push(valInsert);        
    }
    return array;
}

export default Separar_Codigo;
