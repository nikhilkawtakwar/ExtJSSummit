describe("Spy example", function () {
    it("should enter in Area - 51", function () {
        spyOn(topSecurity, 'area51');
        topSecurity.agent707('A', 'B');
        expect(topSecurity.area51).toHaveBeenCalled();
    });

    it("should enter in Area - 51 with F16 & K10", function () {
        spyOn(topSecurity, 'area51');
        topSecurity.agent707('F16', 'K10');
        expect(topSecurity.area51).toHaveBeenCalledWith('F16', 'K10');
    });
});