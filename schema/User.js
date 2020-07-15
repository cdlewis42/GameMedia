require ("./Message")

class User {
    constructor(name, userId){
        this.name = name;
        this.userId = userId;
        this.messageList = [Message] 

    }
};

module.exports = User;