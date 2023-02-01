const UsersService = require('../../api/services/users.service');

describe('UsersService', () => {
  let service;

  beforeEach(() => {
    service = new UsersService();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'secret',
      };

      const result = await service.create(user);

      expect(result).toMatchObject({
        name: user.name,
        email: user.email,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = await service.findAll();

      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('findOne', () => {
    it('should return a user with a matching id', async () => {
      const user = await service.create({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'secret',
      });

      const result = await service.findOne(user._id);

      expect(result).toMatchObject(user);
    });
  });

  describe('update', () => {
    it('should update a user with a matching id', async () => {
      const user = await service.create({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'secret',
      });

      const updatedUser = {
        ...user,
        name: 'Jane Doe',
      };

      const result = await service.update(user._id, updatedUser);

      expect(result).toMatchObject(updatedUser);
    });
  });

  describe('delete', () => {
    it('should delete a user with a matching id', async () => {
      const user = await service.create({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'secret',
      });

      const result = await service.delete(user._id);

      expect(result).toBe(true);
    });
  });
});
