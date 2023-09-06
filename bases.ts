class Teacher {

    // forma 1 de atributos
    // si puedes definir más de un tipo
    public name: string | number
    private lastname: string
    protected cod?: number
    readonly fullname: string

    // forma 2 de atributos: no define atributos debajo de la clase, sino que lo hace directo en el constructor

    // forma 3 de atributos
    /*name: string = "Jose" // inferencia de tipos
    lastname: string = "Ordenes"
    cod: number = 4*/

    // any = recibe cualquier definición de tipos: no son recomendadas en un proyecto profesional
    //cod: any = 4


    // forma 1 de inicialización
    constructor(name: string | number, lastname: string, cod?: number) {
       this.name = name
       this.lastname = lastname
       this.cod = cod
       this.fullname = `${this.name} ${this.lastname}`
    }

    // forma 2 de inicialización
    /*constructor(public name: string, private lastname: string, protected cod: number) {

    }*/

    // forma 3 de inicialización
    /*constructor (name: string, lastname: string, cod: number) {
        this.name = name
        this.lastname = lastname
        this.cod = cod
    }*/


    // el constructor es el primer método que se invoca en una clase
    /*constructor() {
        this.initialize()
    }*/

    /*initialize() {
       this.name = "Miguel"
       this.lastname = "Rivera"
       this.cod = 3 
    }*/

    initialize(): string {
        return "Miguel"
    }
}

// Crear una instancia de un objeto Teacher
const teacher: Teacher = new Teacher("Felipe", "Yevenes", 1)
const teacher2: Teacher = new Teacher(2, "Neira")
console.log(teacher.name)
console.log(teacher2)