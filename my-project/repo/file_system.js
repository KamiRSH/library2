// const fs1 = require("fs")
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
        await fs.access(fileName, fs.constants.F_OK)
    }catch(err){
        await fs.writeFile(fileName, JSON.stringify([]))
    }
  }

}

// const fileSys = new FileSys();
// (async () => {
//     await fileSys.exist("./repo/users.json")
//     await fileSys.exist("./repo/books.json")
// })();

module.exports = FileSys;