import {METHOD} from '../utils/Methods'

describe('async handle', () => {
    it('wait until request resolved', async () => {
        let res = await cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })

        let {status, body} = res
        expect(status).to.eq(200)
        expect(body.length).to.eq(100)
    });
});
//dung cho 1 method request (ko dung dc cho chain)