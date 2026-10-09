export interface InboxEmail {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  receivedAt: string;
  unread: boolean;
  category: string;
}

export interface InboxFilters {
  search: string;
  category: string;
}
