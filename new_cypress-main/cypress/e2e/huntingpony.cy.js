
describe('Автотест для HuntingPony', function () {
   
//открой главную страницу
//открой карточку любого товара
//положи в корзину и измени количество на 2шт
//перейди в корзину
//нажми оформить заказ
//можно закончить тест проверкой на наличие слова "Оформление заказа" или проверить дальше, что заказ создастся    

   it('открой главную страницу', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('#splide02-slide02 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').should('be.visible');
        cy.wait(1000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(1000);
        cy.contains('В корзине 1 шт').should('be.visible');
        cy.get('.header__cart > .icon').should('be.visible');
        cy.get('.header__cart > .icon').click();
        cy.get('.is-count-up').should('be.visible');
        cy.wait(2000);
        cy.get('.is-count-up').click();
        cy.get('.cart-controls > .button').should('be.visible');
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');

    })
})
