import { METHOD } from "../utils/Methods";
import postData from "../fixtures/db.json";

describe('Post request', () => {
    it('Validate status code', () => {
        cy.request({
            url: "http://localhost:3000/posts",
            method: METHOD.post,
            body: postData.posts
        }).then (res => {
            let {status, body} = res
            let responseBody = JSON.parse(JSON.stringify(body))
            expect(status).to.eq(201)
        })
    });
});