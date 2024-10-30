class Elements {
    class = (id) => { return `[class^="${id}"]`}
    placeholder = (id) => {return `[placeholder^="${id}"]`}
    type = (id) => {return `input[type^="${id}"]`}
    name = (id) => {return `[name^="${id}"]`}
    map = (id) => {
        const elements = {
            "E-mail": this.type('text'),
            "Senha": this.type('password'),
            "Login": this.class('button-submit'),
            "Box-credenciais-inválidas": this.class('swal2-container swal2-top-end swal2-backdrop-show'),
            "Menu": this.class('menu-option'),
            'Titulo do Dashboard': this.class('dashboard-title'),
            'Nome': this.placeholder('Nome'),
            'Email': this.placeholder('Email'),
            'Telefone': this.placeholder('Telefone'),
            'Setor': this.placeholder('Setor'),
            'Sexo': this.name('gender'),
            'Option-admin': this.type('checkbox'),
        }
        return elements[id]
    }
}
export default Elements;