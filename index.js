class PC {
    #name
    #cpu
    #graphicsCard
    #ram

    constructor(name, cpu, graphicsCard, ram) {
        this.#name = name
        this.#cpu = cpu
        this.#graphicsCard = graphicsCard
        this.#ram = ram
    }

    getDescription = () => `Name: ${this.#name};\nCPU: ${this.#cpu};\nGraphics card: ${this.#graphicsCard};\nRAM: ${this.#ram}gb.`;
    static createMonsterPC = () => new PC('Monster', 'MAX999', 'G10000Super', 1024);
    static createGamingPC = () => new PC('Gaming', 'Max777', 'G8000', 512);
    static createWorkingPC = () => new PC('Working', 'Mid550', 'G400', 16);
    static createSurfingPC = () => new PC('Surfing', 'Low228', 'GG', 4);
}

function main() {
    let order1 = []
    let order2 = []
    for (let i = 0; i < 3; i++) {
        order1.push(PC.createMonsterPC())
        order1.push(PC.createWorkingPC())
        order2.push(PC.createGamingPC())
        order2.push(PC.createWorkingPC())
        order2.push(PC.createSurfingPC())
    }

    console.log('-=-=-=-= ORDER1 =-=-=-=-')
    for (let pc of order1) {
        console.log(pc.getDescription())
    }

    console.log('-=-=-=-= ORDER2 =-=-=-=-')
    for (let pc of order2) {
        console.log(pc.getDescription())
    }
}

main()