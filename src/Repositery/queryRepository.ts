export default class queryRepository<T> {
  constructor(private model) {}

  // Retrieve all datas from the database
  findAll(): Promise<T[] | undefined> {
    return this.model.find();
  }
  // Retrieve a data by their ID
  findById(id: string): Promise<T | undefined> {
    return this.model.findById(id);
  }

  async findByEmail(email: string): Promise<T | undefined> {
    return await this.model.findOne({ email: email });
  }

  // Add a new data
  create(data: T): Promise<void | undefined> {
    return this.model.create(data);
  }

  // Update an existing data
  update(id: String, data: T): Promise<void | undefined> {
    return this.model.findByIdAndUpdate(id, data);
  }

  // Delete a data
  delete(id: string): Promise<void | undefined> {
    return this.model.findByIdAndDelete(id);
  }
}
