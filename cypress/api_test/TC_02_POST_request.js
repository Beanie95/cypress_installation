describe('Test POST request', () => {
    it('send POST request and verify', () => {
        
        let url = 'https://jsonplaceholder.typicode.com/posts'

        let header = {'Content-type': 'application/json; charset=UTF-8'}

        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestObject = {
            method: 'POST',
            url: url,
            header: header,
            body: requestBody
        }
        
        cy.request(requestObject).then(res => {
            let{status,body} = res
            cy.log(JSON.stringify(body))
            expect(status).to.eq(201,'Status is not 200')

            let {userId, id, title} = body
            let responseBody = body.body

            expect(userId).to.eq(requestBody.userId, 'userID is not correct')
            expect(id).to.eq(101, 'id is not correct')
            expect(title).to.eq(requestBody.title, 'title is not correct')
            expect(responseBody).to.eq(requestBody.body, 'userID is not correct')
        })

    })
})
