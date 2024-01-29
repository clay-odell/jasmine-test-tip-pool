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

    it('should not add a new payment on submitPaymentInfo() with empty input', () => {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should add a row to #paymentTable on appendPaymentTable()', () => {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let curTableDataList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTableDataList.length).toEqual(3);
        expect(curTableDataList[0].innerText).toEqual('$100');
        expect(curTableDataList[1].innerText).toEqual('$20');
        expect(curTableDataList[2].innerText).toEqual('20%');
        
    });
    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        };
        expect(createCurPayment()).toEqual(expectedPayment);
    });
    it('should add a row to #summaryTable on updateSummary()', () => {
       let curPayment = createCurPayment();
       allPayments['payment1'] = curPayment;
       updateSummary();
       expect(summaryTds[0].innerHTML).toEqual('$100');
       expect(summaryTds[1].innerHTML).toEqual('$20');
       expect(summaryTds[2].innerHTML).toEqual('20%');
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
