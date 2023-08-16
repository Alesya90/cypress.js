
describe('Тестирование формы логина', function () {
   
//1 верный логин и пароль
   it('Ввожу верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

//2 проверка логики восстановления пароля
   it('Проверка "Забыли пароль?" ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains(' Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
    })   

//3 верный логин и неверный пароль
   it('Ввожу верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#pass').type('123');
        cy.get('#loginButton').should('be.enabled'); //кнопка входа активна
        cy.get('#loginButton').click();
        cy.wait(1000);//1 секунда
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })   

 //4 неверный логин и верный пароль   
    it('Ввожу неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#mail').type('german123@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка входа активна
        cy.get('#loginButton').click();
        cy.wait(1000);//1 секунда
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })  

 //5 логин без @ и верный пароль   
    it('Ввожу логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка входа активна
        cy.get('#loginButton').click();
        cy.wait(1000);//1 секунда
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })  


//6 проверка на приведение к строчным буквам в логине:  
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа неактивна
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка входа активна
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })  

})
