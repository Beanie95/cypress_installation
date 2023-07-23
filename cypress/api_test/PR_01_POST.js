import { METHOD } from "../utils/Methods";
import items from "../fixtures/db.json";

describe('Post request', () => {
    it('Validate status code', () => {
        cy.request({
            url: "http://localhost:3000/comments",
            method: METHOD.post,
            body: items
        }).then (res => {
            let {status, body} = res
            let responseBody = JSON.parse(JSON.stringify(body))
            expect(status).to.eq(201)
        })
    });
});