export class Log{
    static success(msg: string){
        console.log(`%c ${msg}`,`color: green`);
    }

    static danger(msg: string){
        console.log(`%c ${msg}`,`color: red`);

    }

    static info(msg: string){
        console.log(`%c ${msg}`,`color: black; background:yellow`);

    }

    static customColor(msg: string, color: string, background: string){
        console.log(`%c ${msg}`,`color: ${color}; background: ${background}`);
    }

    static bold(msg: string) {
        console.log(`%c ${msg}`, `font-weight: bold;`);
    }
    
    static italic(msg: string) {
        console.log(`%c ${msg}`, `font-style: italic;`);
    }

}