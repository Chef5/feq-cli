const { host } = require('./config');
const fetch = require('node-fetch');
const qp = require('query-params');

module.exports = {
  getTypeList: async () => {
    const response = await fetch(`${host}/feq/type`);
    const data = await response.json();
    return data;
  },
  
  getQuestion: async (type = 'random') => {
    const response = await fetch(`${host}/feq/random?${qp.encode({ type })}`);
    const data = await response.json();
    return data;
  },

  getQuestionById: async (id) => {
    const response = await fetch(`${host}/feq/question?${qp.encode({ id })}`);
    const data = await response.json();
    return data;
  },

  getAnswerById: async (id) => {
    const response = await fetch(`${host}/feq/answer?${qp.encode({ id })}`);
    const data = await response.json();
    return data;
  },
}