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
    it('should return undefined with negative or empty inputs and tip can be zero, but positive bill amount is required for createCurPayment()', () => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let payment = createCurPayment();
        expect(payment).toBeUndefined();
        billAmtInput.value = -100;
        tipAmtInput.value = -20
        payment = createCurPayment();
        expect(payment).toBeUndefined();
    });
    it('should create table row element and pass to appendTd with input value', () => {
    
       })

        afterEach(function() {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            paymentTbody.innerHTML = '';
            summaryTds[0].innerHTML = '';
            summaryTds[1].innerHTML = '';
            summaryTds[2].innerHTML = '';
            serverTbody.innerHTML = '';
            paymentId = 0;
            allPayments = {};
          });
});