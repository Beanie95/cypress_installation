
describe('handle chain request', () => {
    it('request chain', () => {
        //let url = 'https://jsonplaceholder.typicode.com/posts'
        let url = Cypress.env("baseUrl") //ko de url xuat hien o day, chay CM co url luon

        //let header = {'Content-type': 'application/json; charset=UTF-8'}

        let requestPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestPutBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        cy.create(requestPostBody) .then(res => {
            cy.read((Number(res.body.id)-1).toString()).then(res => {
                cy.update(requestPutBody, res.body.id).then(res => {
                    cy.delete(res.body.id).then(res => {
                        cy.log(JSON.stringify(res))
                    })
                })
            })
        })
    });
});