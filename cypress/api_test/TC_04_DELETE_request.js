import {METHOD} from '../utils/Methods'
import items from "../fixtures/db.json";
describe('Test DELETE method', () => {
    it('send Delete and verify', () => {
        cy.request({
            method: METHOD.delete,
            url: 'http://localhost:3000/comments/',
            body: items.postId
        }).then(res => {
            let {status} = res
            expect(status).to.eq(200, 'Verify status')
        })
    });
});
