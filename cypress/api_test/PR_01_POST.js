import { METHOD } from "../utils/Methods";
import { items } from "../fixtures/db";

describe('Post request', () => {
    it('Validate status code', () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: METHOD.post,
            body: items.posts
        }).then (res => {
            let {status, body} = res
            let responseBody = JSON.parse(JSON.stringify(body))
            expect(status).to.eq(201)
        })
    });
});