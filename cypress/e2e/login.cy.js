describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
        it('Верный логин и НЕверный пароль', function () {
            cy.visit('https://login.qa.studio/');
           cy.get('#mail').type('german@dolnikov.ru');
           cy.get('#pass').type('iLoveqastudio12');
           cy.get('#loginButton').click();
           cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
           cy.get('#messageHeader').should('be.visible');
           cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
       it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@do1lnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
    it('Забыли пароль', function () {
    cy.visit('https://login.qa.studio/');
   cy.get('#forgotEmailButton').click();
   cy.get('#mailForgot').type('ghjghjghj@ggg.ru');
   cy.get('#restoreEmailButton').click();
   cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
   cy.get('#messageHeader').should('be.visible');
   cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
it('Верный пароль и верный логин, строчные символы', function () {
    cy.visit('https://login.qa.studio/');
   cy.get('#mail').type('GerMan@Dolnikov.ru');
   cy.get('#pass').type('iLoveqastudio1');
   cy.get('#loginButton').click();
   cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
   cy.get('#messageHeader').should('be.visible');
   cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
})
