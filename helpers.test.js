describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
    it('should return the sum of tip amount from all payments on sumPaymentTotal()', () =>{
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    })
});