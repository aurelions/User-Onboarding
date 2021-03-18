//Cypress tests will be ran inside of the file 


            

describe('The outermost description block', () => {

    
    
            
    

    //These tests don't really matter. They just check to see if anything breaks at a simple point
    it('renders the page', () => {
        cy.visit('http://localhost:3000/')
    })

    it('tests to see if a username can be entered', () => {
        cy.get(':nth-child(1) > input').type('hello world')
    })

    it('tests to see if the email can be entered', () => {
        cy.get(':nth-child(3) > input').type('email@email.com')
    })

    it('tests to see if the passcode can be entered', () => {
        cy.get('.input > :nth-child(5) > input').type('Password1$')
    })

    it('checks to see if the terms of service checkbox can be checked', () => {
        cy.get('.form > :nth-child(5) > input').check()
    })

    it('tests to see if the checkbox can be unchecked', () => {
        cy.get('.form > :nth-child(5) > input').check().uncheck()
    })


    //This test will actually look to see if the username can be less than 4 characters and be submitted (YUP should only let you enter a UN above 5 characters long)
    describe('The nitty gritty tests', () => {

            
        
        // it('can submit after all of the tests have been run', () => {
        //     cy.get('button').click()
        // })

        it('tests to see if the username can be less than 4 characters', () => {
            cy.get(':nth-child(1) > input').clear().type('asd')
        })

        it('now submit with just the 3 letter username', () => { //This test should fail...
            cy.get('button').click()
        })

        //clean up
        
        

    })
    
})