describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create table row element and pass to appendTd function with input value for the updateServerTable () function', () => {
    serverId++;
    allServers['server' + serverId] = { serverName: 'Alice' };
    paymentId++;
    allPayments['payment' + paymentId] = {billAmt: 100, tipAmt: 20, tipPercent: 20};
    updateServerTable();
    expect(serverTbody.children.length).toEqual(1);
    expect(serverTbody.children[0].id).toEqual('server1');
    expect(serverTbody.children[0].children[0].innerText).toEqual('Alice');
    expect(serverTbody.children[0].children[1].innerText).toEqual('$20.00');
  });

  afterEach(function () {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
    serverNameInput.value = '';
    
   
  });
});
