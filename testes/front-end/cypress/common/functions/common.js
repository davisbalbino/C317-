import Elements from "../elements/elements";
const elements = new Elements();

class functions {
    visitPage(page) {
        const baseUrl = 'https://davisbalbino.github.io/C317-/#/';
        cy.visit(baseUrl + page);
    }

    submitCredentials(email, password){
        cy.get(elements.map('E-mail')).type(email);
        cy.get(elements.map('Senha')).type(password);
        cy.get(elements.map('Login')).click();
    }

    boxCredenciaisInvalidas(){
        cy.get(elements.map('Box-credenciais-inválidas')).should('be.visible');
        cy.get(elements.map('Box-credenciais-inválidas')).contains('Erro ao fazer a solicitação')
    }

    menuOption(option){
        cy.get(elements.map('Menu')).contains(option).click();
    }

    dashboardTitle(title){
        cy.get(elements.map('Titulo do Dashboard')).should('be.visible');
        cy.get(elements.map('Titulo do Dashboard')).contains(title);
    }

    form(id,word){
        cy.get(elements.map(id)).click();
        cy.get(elements.map(id)).type(word)
    }
    
    selectOption(id, option){
        cy.get(elements.map(id)).select(option);
    }

    toggleCheckbox(id, shouldCheck) {
        cy.get(elements.map(id)).then($checkbox => {
            if (shouldCheck) {
                if (!$checkbox.is(':checked')) {
                    cy.wrap($checkbox).check();
                }
            } else {
                if ($checkbox.is(':checked')) {
                    cy.wrap($checkbox).uncheck();
                }
            }
        });
    }

    button(id) {
        cy.get(elements.map(id)).click();
    }
}
export default functions;