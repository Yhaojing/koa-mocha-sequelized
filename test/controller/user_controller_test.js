/**
 * Created by hnzb on 16/8/17.
 */
import should from 'should';
import request from 'superagent';
// import app from '../../app';

let base = "http://localhost:3000";
describe('user_controller', () => {
    it.skip('get ', (done) => {
        request
            .get(base+'/users')
            .end((err, res) => {
                console.log(res.body);
                done();
            })
    })
    it.only('post', (done) => {
        request
            .post(base+'/users')
            .send({name: 'test', pwd: 'test'})
            .end((err, res) => {
                console.log(res)
                done()
            })
    })
})

