import { METHOD } from "../utils/Methods";
import { items } from "../fixtures/db";
describe('Get Request', () => {
    it('Validate status code and key values', () => {
        cy.request({
            url: 'http://localhost:3000/posts',
            method: METHOD.get,
            headers: {
                accept: 'application/json'
            }
        }).then(res => {
            let {status, body} = res
            let responseBody = items.posts
            expect(status).to.eq(200);
            expect(responseBody[0]).have.property("title", "json-server")

            for(let item of items.posts){
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("title: " + item.title + " & author: " + item.author)
                if(item["id"] == 3 ){
                    break
                }
            }
        })
    });

});