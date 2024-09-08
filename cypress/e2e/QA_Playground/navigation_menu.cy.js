/// <reference types="cypress" />

describe('QA Playground: Navigation Menu', () => {
    beforeEach(() => {
        cy.visit('https://qaplayground.dev/apps/links/')
    })
    
    it('Menu is displayed', () => {
        cy.get("[id='nav']").find('a').eq(0).should('have.text', 'Home')
        cy.get("[id='nav']").find('a').eq(1).should('have.text', 'About')
        cy.get("[id='nav']").find('a').eq(2).should('have.text', 'Blog')
        cy.get("[id='nav']").find('a').eq(3).should('have.text', 'Portfolio')
        cy.get("[id='nav']").find('a').eq(4).should('have.text', 'Contact')
    })

    it('Home', () => {
        cy.get("[id='nav']").find('a').eq(0).should('have.text', 'Home').click()
        cy.location('pathname').should('eq', '/apps/links/')
    })

    context('Menu links', () => {
        it('About', () => {
            cy.get("[id='nav']").find('a').eq(1).should('have.text', 'About').click()
            cy.location('pathname').should('eq', '/apps/links/about')
            cy.get('main').find('h1').should('have.text', 'Welcome to the About Page')
        })

        it('Blog', () => {
            cy.get("[id='nav']").find('a').eq(2).should('have.text', 'Blog').click()
            cy.location('pathname').should('eq', '/apps/links/blog')
            cy.get('main').find('h1').should('have.text', 'Welcome to the Blog Page')
        })

        it('Portfolio', () => {
            cy.get("[id='nav']").find('a').eq(3).should('have.text', 'Portfolio').click()
            cy.location('pathname').should('eq', '/apps/links/portfolio')
            cy.get('main').find('h1').should('have.text', 'Welcome to the Portfolio Page')
        })

        it('Contact', () => {
            cy.get("[id='nav']").find('a').eq(4).should('have.text', 'Contact').click()
            cy.location('pathname').should('eq', '/apps/links/contact')
            cy.get('main').find('h1').should('have.text', 'Welcome to the Contact Page')
        })

        afterEach(() => {
            cy.get('main').find('a').contains('Go Back').click()
            cy.location('pathname').should('eq', '/apps/links/')
        })
    })
})