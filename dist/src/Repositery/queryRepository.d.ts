export default class queryRepository {
    private database;
    constructor(database: any);
    findById(id: number): any;
    create(user: any): any;
    update(user: any): any;
    delete(id: number): any;
}
