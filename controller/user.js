/**
 * Created by hnzb on 16/8/17.
 */
import { insertData, getAllData } from '../dao/user';

async function  postUser(ctx) {
    console.log(ctx.request.body);
    ctx.body = await insertData(ctx.request.body)
}

async function getUser(ctx) {
    // ctx.body = (await getAllData())[0].dataValues;
    ctx.body = await getAllData();
}

export { postUser, getUser };