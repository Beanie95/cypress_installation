import { METHOD } from "../utils/Methods";
import { items } from "../fixtures/getData";
describe('Get Request', () => {
    it('Validate status code and key values', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: METHOD.get,
            headers: {
                accept: 'application/json'
            }
        }).then(res => {
            let {status, body} = res
            let responseBody = JSON.parse(JSON.stringify(body))
            expect(status).to.eq(200);
            //cy.log(responseBody);
            expect(responseBody[0]).has.property("title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit")

            for(let item of items){
                expect(item).to.have.all.keys("userId", "id", "title", "body")
                cy.log("title: " + item["title"] + " & body: " + item["body"])
                if(item["id"] == 2 ){
                    break
                }
            }
        })
    });

});