require('solcjs-mock')();

const chai = require('chai');
chai.should();

const resolveHttp = require('../src');

describe('https', () => {
  it('found', async () => {
    const path = 'https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/math/SafeMath.sol';
    let content = await resolveHttp.parser(path);
    content.should.be.a('string');
    content.length.should.be.above(50);
  });

  it('no found', async () => {
    const path = 'https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/math/SafeMath2.sol';
    try {
      await resolveHttp.parser(path);
    } catch (error) {
      error.should.be.a('error');
      error.message.should.be.eq('Content 404: Not Found\n');
    }
  });
});