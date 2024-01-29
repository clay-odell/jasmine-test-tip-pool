describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
    
    
    it('should add a new payment to allPayments on submitPaymentInfo()', () => {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
      });
    
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
            billAmtInput.value = '';
            submitPaymentInfo();
        
            expect(Object.keys(allPayments).length).toEqual(0);
          });
    afterEach( () => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
    
});
