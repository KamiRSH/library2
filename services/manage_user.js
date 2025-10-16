const DTO = require("../model.js")
const Tools = require("./tools.js")
const dto = new DTO()
const tools = new Tools()

class ManageUser{
    constructor() {
        if (ManageUser.instance){
            return ManageUser.instance
        }
        ManageUser.instance = this
        this.usersLi = []
        
        
    }

    async init(){
        this.usersLi = await dto.jFile_to_objUsers()
        dto.objUsers_to_jFile(this.usersLi)     // resetting tokens
    }

    signUp(objUser){
        for(const i of this.usersLi){
            if(i.phone == objUser.phone){
                return null
            }
        }
        // set id and role
        if(this.usersLi.length == 0){
            objUser.id = 0
            objUser.role = "admin"
        }else{
            const lastId = this.usersLi[this.usersLi.length -1].id
            objUser.id = lastId + 1
            objUser.role = "user"
        }   
        this.usersLi.push(objUser)
        dto.objUsers_to_jFile(this.usersLi)
        // console.log(this.usersLi)
        return objUser
    }

    logIn(objDetail, token){
        for (const i of this.usersLi){
            if (objDetail.phone == i.phone){
                if (objDetail.password == i.password){
                    const index = this.usersLi.indexOf(i)
                    this.usersLi[index].token = token
                    dto.objUsers_to_jFile(this.usersLi)
                    return true
                }else {
                    return false
                }
            }
        }
        return false
    }

    view(id, token){
        const index = tools.indexOfId(this.usersLi, id)
        if (index != -1){
            if(this.usersLi[index].token == token){
                return this.usersLi[index]
            }else{
                return "wrong token"
            }
        }else{
            return `couldn't find user with id ${id}`
        }
    }

    edit(id, detail, token){
        const index = tools.indexOfId(this.usersLi, id)
        if(index != -1){
            if(this.usersLi[index].token == token){
                for(const i of Object.keys(detail)){
                    if(detail[i]){
                        this.usersLi[index][i] = detail[i]
                    }
                }
                dto.objUsers_to_jFile(this.usersLi)
                return "your info successfully updated:"
            }else{
                return "wrong token"
            }
        }else{
            return `couldn't find user with id ${id}`
        }
    }

}

module.exports = ManageUser;

