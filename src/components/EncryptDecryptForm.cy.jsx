import EncryptDecryptForm from './EncryptDecryptForm'

describe('<EncryptDecryptForm />', () => {
    beforeEach(() => {
        cy.mount(<EncryptDecryptForm/>)
    })

    it('renders', () => {
        cy.mount(<EncryptDecryptForm/>)
    })

    describe('should be present buttons "Encrypt" and "Decrypt"', () => {

        it('should have Encrypt button', () => {
            const plus = cy.get(".encrypt-button").contains("Encrypt");
            plus.should("be.visible");
        })
        it("should have Decrypt button", () => {
            cy.get(".decrypt-button").contains("Decrypt").should("be.visible");
        })
    })

    it('should be able to encrypt a text and display the result', () => {
        cy.get('textarea[placeholder="Enter any text to be Encrypted"]').type('test text')
        cy.get('.encrypt-button').click();
        cy.get('textarea[placeholder="Encrypted  text will appear here"]').should('not.be.empty');
    })

    it('should be able to decrypt a text and display the result', () => {
        cy.get('textarea[placeholder="Enter any text to be Decrypted"]').type('kvjk kvok')
        cy.get('.decrypt-button').click();
        cy.get('textarea[placeholder="Decrypted  text will appear here"]').should('not.be.empty');
    })
})
