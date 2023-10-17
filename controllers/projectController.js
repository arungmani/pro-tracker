const Project = require("../models/project");
const moment = require("moment");

const getAllProjects = (req, res) =>{
    Project.find({ projectId: req.body.projectId}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            if(docs.length>0){
                if(docs[0].projectId==req.body.projectId){
                    res.status(200).json({ status: "success",data:docs })
                }
                else{
                    res.send("Invalid Credentials!");
                }
            }
            else{
                res.send("Invalid Credentials!");
            }
        }
    });
}

const register = async (req, res)=>{
    try {
        const user = await new User({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            creation_date: moment().format("MMMM Do YYYY, h:mm:ss a")
        })
        await user.save()
        res.status(200).json({ message: 'added!' })
    } catch (err) {
        console.log(err)
        if(err.code=='11000'){
            res.send('User Already Exists!');
        }
        else{
            res.send({ status: 'err', message: err });
        }
    }
}

module.exports = {
    getAllProjects,
    register
}