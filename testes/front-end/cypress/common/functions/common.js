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

    createSearch(name,group,type){
        cy.get(elements.map('Titulo da Pesquisa')).type(name);
        cy.get(elements.map('Grupo')).type(group);
        cy.get(elements.map('search-options')).contains(type).click();
    }

    createQuest(question){
        cy.get(elements.map('Pesquisa')).click();
        cy.get(elements.map('Pesquisa')).type(question);
    }

    answerSearch(answer, question){
        cy.get(elements.map('Menu')).contains('Pesquisas a Responder').click();
        cy.get(elements.map('Card')).click();
        cy.get(elements.map('Card')).contains(question).click();
        cy.get(elements.map('Sua resposta')).click();
        cy.get(elements.map('Sua resposta')).type(answer);
        cy.get(elements.map('Enviar Respostas')).click();
    }
}
export default functions;