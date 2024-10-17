import Elements from "../elements/elements";
const elements = new Elements();

class functions {
    visitPage() {
        cy.visit('https://davisbalbino.github.io/C317-/#/login');
    }

    submitCredentials(email, password){
        cy.get(elements.map('E-mail')).type(email);
        cy.get(elements.map('Senha')).type(password);
        cy.get(elements.map('Login')).click();
    }

    boxCredenciaisInvalidas(){
        cy.get(elements.map('Box-credenciais-inválidas')).should('be.visible');
        cy.get(elements.map('Box-credenciais-inválidas')).contains('Credenciais inválidas')
    }
}
export default functions;