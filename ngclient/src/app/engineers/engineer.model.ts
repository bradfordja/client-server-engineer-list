// engineers/engineer.model.ts
export interface Engineer {
    userId?: number,
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    siteId: string;
    siteName?: string;
    statusId: number;
    statusName?: string;
  }
