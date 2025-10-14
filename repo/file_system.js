const constants = require("fs")
const fs = require("fs/promises")

class FileSys{
    constructor() {
        if (FileSys.instance){
            return FileSys.instance
        }
        FileSys.instance = this
        // this.exist("./users.json")
        // this.exist("./books.json")
    }
  
  async read(fileName){
    try{
        const data = await fs.readFile(fileName, "utf8")
        return JSON.parse(data)
    }catch(err){
        console.error("reading error:", err)
    }
  }
  
  async write(fileName, content){
    try{
        await fs.writeFile(fileName, JSON.stringify(content))
    }catch(err){
        console.error("writing error:", err)
    }
  }

  async appnd(fileName, content){
    try{
        await fs.appendFile(fileName, JSON.stringify(content))
    }catch(err){
        console.error("appending error:", err)
    }
  }

  async exist(fileName){
    try{
        await fs.access(fileName, constants.F_OK)
        // return true
    }catch(err){
        await fs.writeFile(fileName, JSON.stringify([]))
        // return false
    }
  }

}
console.log(100)
const fileSys = new FileSys();
(async () => {
    console.log(200)
    await fileSys.exist("./repo/users.json")
    await fileSys.exist("./repo/books.json")
})();

module.exports = FileSys;