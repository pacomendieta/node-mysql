class classController  {
    constructor(db, entidad) {
        this._db = db;          //Objeto db
        this.entidad = entidad  //string Entidad
    }
    getAll() {
        return this._db[this.entidad].findAll()
    }

    get(id) {
        return this_db[this.entidad].findOne( 
            { where: { id: id}}
        )
    }

    insert( registro ) {
        return this._db[this.entidad].create(registro)
    }

    update(id, registro) {
        delete registro.createAt
        //delete registro.updateAt
        return this._db[this.entidad].update(registro, {where:{id}})
    }

    delete(id) {
        return this._db[this.entidad].destroy({where:{id}})
    }

}//classController

module.exports = classController;