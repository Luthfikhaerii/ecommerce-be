describe("Middleware",()=>{
    it("should return sum",()=>{
        const sum = (a:number,b:number):number=>{
            return a+b
        }
        expect(sum(1,2)).toBe(3)
    })
})