// __tests__/engineerModel.test.js
const engineerModel = require('../engineerModel');

describe('Engineer Model', () => {
  test('Get engineer by name', async () => {
    const engineers = await engineerModel.getEngineerByName('John', 'Doe');
    expect(engineers.length).toBe(1);
    expect(engineers[0].firstName).toBe('John');
    expect(engineers[0].lastName).toBe('Doe');
  });

  // Add other test cases for CRUD operations
  // ...
});