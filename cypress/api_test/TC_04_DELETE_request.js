import {METHOD} from '../utils/Methods'

describe('Test DELETE method', () => {
    it('send Delete and verify', () => {
        cy.request({
            method: METHOD.delete,
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).then(res => {
            let {status} = res
            expect(status).to.eq(200, 'Verify status')
        })
    });
});
