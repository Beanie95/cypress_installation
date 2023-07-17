import { METHOD } from "../utils/Methods";
import * as userData from "../fixtures/postData";

describe('Post request', () => {
    it('Validate status code', () => {
        cy.request({
            url: "https://jsonplaceholder.typicode.com/users",
            method: METHOD.post,
            body: userData
        }).then (res => {
            let {status, body} = res
            let responseBody = JSON.parse(JSON.stringify(body))
            expect(status).to.eq(201)
        })
    });
});