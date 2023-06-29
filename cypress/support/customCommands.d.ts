declare namespace Cypress {
    interface Chainable<Subject> {
        delete(delNum: any): Chainable<any>
        read(postNum: any): Chainable<any>
        create(postBody: any): Chainable<any>
        update(putBody: any, putNum: any): Chainable<any>
  }
}