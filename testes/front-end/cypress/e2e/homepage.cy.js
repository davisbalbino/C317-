import functions from "../common/functions/common";
const func = new functions();
describe('HomePage', () => {
    beforeEach(() => {
        func.visitPage('homepage');
    });

    it('homepage: validando as pesquisar a responder.',function(){
        func.menuOption('Pesquisas a Responder');
        func.dashboardTitle('Pesquisas a Responder');
    })

    it('homepage: validando as pesquisas respondidas.',function(){
        func.menuOption('Pesquisas Respondidas');
        func.dashboardTitle('Pesquisas Respondidas');
    })

    it.only('homepage: validando a tela de cadastro do colaborador.',function(){
        func.menuOption('Cadastro de Colaborador');
        func.dashboardTitle('Cadastro de Colaborador');
        //nome
        func.form('Nome', 'Fulano');
        //e-mail
        func.form('Email', 'fulano5@gmail.com');
        //senha
        func.form('Senha', '123456');
        //telefone
        func.form('Telefone', '999999999');
        //setor
        func.form('Setor', 'TI');
        //sexo
        func.selectOption('Sexo', 'Masculino');
        //admin
        func.toggleCheckbox('Option-admin', true);
        //clicar button
        func.button('Login');
    })

    it('homepage: validando a tela de criar pesquisas.',function(){
        func.menuOption('Criar Pesquisas');
        func.dashboardTitle('Criar Pesquisas');
    })
});