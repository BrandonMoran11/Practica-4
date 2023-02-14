let persona = {
    nombre : "Brandon",
    apellido :"Moran",
    getName: function(){
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Madero#144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima"
    },
    getDomicilio: function(){
        return `Calle:${this.domicilio.calle} Colonia:${this.domicilio.colonia} CP:${this.domicilio.cp} Municipio:${this.domicilio.municipio}`;
    }
}
 
console.log(persona.getName());
console.log(persona.getDomicilio());

