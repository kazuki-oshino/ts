interface Person {
    name: string
    age: number
}

const person: Person = {
    name: 'takenori',
    age: 49,
}

interface SayHello {
    (name: string): string
}

const a : SayHello = (take: string) => {
    return `${take} nori`
}

console.log(person.age)
console.log(a('pak'))