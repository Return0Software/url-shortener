import * as mongoose from "mongoose";

const server = "localhost:27018";
const database = "url-db"

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`, {
                useNewUrlParser: true
            })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            });
        mongoose.set("debug", true);
    }
}

export default new Database();
