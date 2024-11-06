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
            'Titulo da Pesquisa': this.placeholder('Título da Pesquisa'),
            'Grupo': this.placeholder('Grupo'),
            'Cor': this.placeholder('Cor Tema'),
            'Imagem': this.placeholder('Imagem'),
            'search-options': this.class('search-options'),
            'Pesquisa': this.class('text-field-container'),
            'Submit': this.class('submit'),
            'Card': this.class('survey-card'),
            'Sua resposta': this.placeholder('Sua resposta'),
            'Enviar Respostas': this.class('submit-button'),
        }
        return elements[id]
    }
}
export default Elements;