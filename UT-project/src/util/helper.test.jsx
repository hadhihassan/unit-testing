import { describe, it, expect } from '@jest/globals';
import { URL_API, add, revreseString, LANGUAGES, USER_DETAILS, fetchUser, isAuthenticated } from './helper';


// NORMAL FUNCITON TESING
describe("add function", () => {
    it("returns 1 +1 =2", () => {
        expect(add(1, 1)).toBe(2);
    });
    it("returns 500 + 500 = 1000", () => {
        expect(add(500, 500)).toBe(1000);
    });
    it("returns 1 + 1 = 11", () => {
        expect(add("1", "1")).toBe(0);
    });
});

// STRING TESING

describe("chech string is reverse", () => {
    it("Chekc if string reverse properly.", () => {
        expect(revreseString("hadhi")).toBe("ihdah")
    })
    it("Check if the fucntion is defned.", () => {
        expect(revreseString).toBeDefined()
    })
    it("Chekc if as => sa.", () => {
        expect(revreseString("as")).toBe("sa")
    })
})

// URL TESTING

describe("URL_API URL ", () => {
    it("Check url is correct ", () => {
        expect(URL_API).toBe("https://api.com/admin/login")
    })
})
//ENUMS
describe("languages", () => {
    it("Check languages length is 3", () => {
        expect(LANGUAGES).toEqual(["CSS", "HTML", "JS"])
    })
})
//OBJECT TESTING
describe("User details object ", () => {
    it("Check object property length is 3", () => {
        expect(USER_DETAILS).toEqual({
            name: "hadhi",
            age: 19,
            place: "kerala,india"
        })
    })
    it("Check object have age property", () => {
        expect(USER_DETAILS).toHaveProperty("age")
    })
})
//ATI TESING
describe("User api", () => {
    it("check api is have have property ", async () => {
        const data = await fetchUser();
        expect(data).toHaveProperty("userId")
    }, 10000)
})

//  throw new error // ERRO THROW 
describe("THROW NEW ERROR", () => {
    it("chech user is logges", () => {
        expect(isAuthenticated(true)).toBeTruthy();
    })
    // when we using the toThrow method time the expect argu want to wrap the call back function .
    it("if user note logges", () => {
        expect(() => isAuthenticated(false)).toThrow()
    })

})


