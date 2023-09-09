// Interface for Engineer model
export interface Engineer {
    userId: number;
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    statusId: number;
    siteId: number;
    siteName?: string;
    status?: string;
  }
  
  // In-memory data store for engineers
  export const engineers: Engineer[] = [
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe',
      title: 'Software Engineer',
      statusId: 2,
      siteId: 1,
    },
    {
      userId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      fullName: 'Jane Smith',
      title: 'Senior Engineer',
      statusId: 1,
      siteId: 2,
    },
    {
      userId: 3,
      firstName: 'Jim',
      lastName: 'Smith',
      fullName: 'Jim Smith',
      title: 'Senior Engineer',
      statusId: 1,
      siteId: 3,
    },
    {
      userId: 3,
      firstName: 'Elvis',
      lastName: 'Presley',
      fullName: 'Elvis Presley',
      title: 'Senior Engineer',
      statusId: 1,
      siteId: 4,
    },
    // Add more engineer records as needed
  ];