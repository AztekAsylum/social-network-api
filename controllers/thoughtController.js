const { Thought, User } = require('../models');

module.exports = {

    async getAllThoughts(req, res){
        console.log("get all thoughts");
    },

    async getOneThought(req, res){
        console.log("get one thought");
    },

    async createThought(req, res){
        console.log("create one thought");
    }


}