export class Usuario {
    public nombre: string;
    public apellidos: string;
    public email: string;
    public password: string;

    constructor(nombre: string, apellidos: string, email: string, password: string = "") {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
    }

}
