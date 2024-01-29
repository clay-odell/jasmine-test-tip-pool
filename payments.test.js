describe("Payments test (with setup and tear-down)", function() {
    beforeEach(() => {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

    it('should add a curPayment object to allPayments, update html and reset input values', () => {
       submitPaymentInfo();
       expect(Object.keys(allPayments).length).toEqual(1);
       expect(allPayments['payment1'].billAmt).toEqual('100');
       expect(allPayments['payment1'].tipAmt).toEqual('20');
       expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentForm.reset();
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});
