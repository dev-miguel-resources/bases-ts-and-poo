interface ITeacher {
    name: string
    lastname: string
    cod: number
    // initialize(): string
}

// forma °4
class Teacher {

    name: string
    lastname: string
    cod: number

    constructor({ name, lastname, cod }: ITeacher) {
        this.name = name
        this.lastname = lastname
        this.cod = cod
    }
}

const teacher: Teacher = new Teacher({ lastname: "Faundez", name: "Miguel", cod: 4 })
console.log(teacher)