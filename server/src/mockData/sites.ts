
// Interface for SiteLocation model
export interface SiteLocation {
    siteId: number;
    siteName: string;
    address: string;
    city: string;
    state: string;
    status: string;
  }

// In-memory data store for engineers
export const siteLocations: SiteLocation[] = [{
        siteId: 1, 
        siteName:'N Site', 
        address:'123 Main St', 
        city:'New York', 
        state:'NY',
        status: 'active'
    },{
        siteId: 2, 
        siteName:'A Site', 
        address:'456 Elm St', 
        city:'Los Angeles', 
        state:'CA',
        status: 'active'
    },{
        siteId: 3, 
        siteName:'C Site', 
        address:'789 Oak St', 
        city:'Chicago', 
        state:'IL',
        status: 'active'
    },{
        siteId: 4, 
        siteName:'D Site', 
        address:'789 Oak St', 
        city:'Denver', 
        state:'CO',
        status: 'active'
    }
]
