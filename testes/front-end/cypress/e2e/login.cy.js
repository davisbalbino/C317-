import functions from "../common/functions/common";
const func = new functions();
describe('Login', () => {
    beforeEach(() => {
        func.visitPage();
    });
    it('login inválido',function(){
        
        func.submitCredentials('fulatodetal@gmail.com', '123456');
        func.boxCredenciaisInvalidas();
    })
});