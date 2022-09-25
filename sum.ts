function sum(s : string) : string {

    const sayHello : (name: string) => string = (a : string) : string => {
        return `${a} desu`
    }

    return sayHello(s)
}

console.log(sum('king oshino'))