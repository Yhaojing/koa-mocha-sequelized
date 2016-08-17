/**
 * Created by hnzb on 16/8/17.
 */
import should from 'should';
import { insertData, getAllData } from '../../dao/user';

describe('dao', function(){
    it.skip('insertData', function(done) {
        insertData({name: 'haojing', pwd: '123456'}).then( (res) => {
            console.log('res', res);
            done();
        } )
    })
    it.only('getAllData', (done) => {
        getAllData().then((res) => {
            console.log('res', res[0].dataValues);
            res[0].dataValues.should.eql({ id: 1, name: 'haojing', pwd: '123456' });
            done();
        })
    })
})
