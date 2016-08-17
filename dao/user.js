/**
 * Created by hnzb on 16/8/17.
 */
import { koaTest } from '../model/index';

function insertData (data) {
    return koaTest.create(data);
}

function getAllData() {
    return koaTest.findAll();
}

export { insertData, getAllData };