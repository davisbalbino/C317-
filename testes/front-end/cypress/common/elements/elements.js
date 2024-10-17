class Elements {
    class = (id) => { return `[class^="${id}"]`}
    placeholder = (id) => {return `[placeholder^="${id}"]`}
    type = (id) => {return `input[type^="${id}"]`}
    map = (id) => {
        const elements = {
            "E-mail": this.type('text'),
            "Senha": this.type('password'),
            "Login": this.class('button-submit'),
            "Box-credenciais-inválidas": this.class('swal2-container swal2-top-end swal2-backdrop-show'),
            
        }
        return elements[id]
    }
}
export default Elements;