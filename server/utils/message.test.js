var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        //store res in variable
        var from = 'Admin';
        var text = 'Welcome';

        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct location object',()=>{
        var from = 'Admin';
        var latitude = '37';
        var longitude = '37';
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

        var locationMessage = generateLocationMessage(from,latitude,longitude);
        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({from,url});
    });
})