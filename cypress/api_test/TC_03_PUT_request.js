describe('Test PUT mothod', () => {
    it('send PUT method and verify', () => {
        let requestBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            header: {'Content-type': 'application/json; charset=UTF-8'},
            body: requestBody
        }).then(res => {
            let {status} = res
            let reponseBody = res.body
            let {userId, id, title, body} = reponseBody
            expect(status).to.eq(200)
            expect(userId).to.eq(requestBody.userId)
            expect(id).to.eq(requestBody.id)
            expect(title).to.eq(requestBody.title)
            expect(body).to.eq(requestBody.body)
        })
    });
});
