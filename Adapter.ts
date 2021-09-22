/* Esta primer clase ejemplifica un clase normal que es utilizada por el codigo del cliente. */
class Texto {
    public getTexto(): string{
        return 'Texto sin codificar y comprensible';
    }
}

/* Esta segunda clase ejemplifica una clase con funciones utiles pero cuya interfaz no es compatible con el codigo del cliente. */
class Secreto {
    public getSecreto(): string{
        return 'Ufyup!dpejgjdbep!f!jodpnqsfotjcmf';
    }
}

/* Esta clase ejemplifica el adaptador, que toma la interfaz de la segunda clase y la hace compatible con la de la primera. */
class Traductor extends Texto {
    private txtSecreto: Secreto;

    constructor(txt: Secreto){
        super();
        this.txtSecreto = txt;
    }

    public getTexto(): string{
        let resultado = "";

        for(let i = 0; i< this.txtSecreto.getSecreto().length; i++){
            let codigo = this.txtSecreto.getSecreto().charCodeAt(i);
            codigo--;
            resultado += String.fromCharCode(codigo);
        }
        return `Secreto traducido: ${resultado}`;
    }
}

/* Este ejemplifica el codigo del cliente que solo es compatible con la interfaz de la primer clase. */
function clientCode(texto: Texto){
    console.log(texto.getTexto());
}

/* Ejemplo de funcionamiento del adapator */

const txt = new Texto();
clientCode(txt);

console.log('');

const secreto = new Secreto();
console.log(`Secreto: ${secreto.getSecreto()}`);

console.log('');

const traductor = new Traductor(secreto);
clientCode(traductor);
