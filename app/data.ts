////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Remix, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from "match-sorter";
// @ts-expect-error - no types, but it's a tiny function
import sortBy from "sort-by";
import invariant from "tiny-invariant";

type ContactMutation = {
  id?: string;
  title?: string;
  category?: string;
  year?: string;
  imageUrl?: string;
  backgroundColor?: string;
  href?: string;
};

export type ContactRecord = ContactMutation & {
  id: string;
  createdAt: string;
};

////////////////////////////////////////////////////////////////////////////////
// This is just a fake DB table. In a real app you'd be talking to a real db or
// fetching from an existing API.
const fakeContacts = {
  records: {} as Record<string, ContactRecord>,

  async getAll(): Promise<ContactRecord[]> {
    return Object.keys(fakeContacts.records)
      .map((key) => fakeContacts.records[key])
      .sort(sortBy("-createdAt", "last"));
  },

  async get(id: string): Promise<ContactRecord | null> {
    return fakeContacts.records[id] || null;
  },

  async create(values: ContactMutation): Promise<ContactRecord> {
    const id = values.id || Math.random().toString(36).substring(2, 9);
    const createdAt = new Date().toISOString();
    const newContact = { id, createdAt, ...values };
    fakeContacts.records[id] = newContact;
    return newContact;
  },

  async set(id: string, values: ContactMutation): Promise<ContactRecord> {
    const contact = await fakeContacts.get(id);
    invariant(contact, `No contact found for ${id}`);
    const updatedContact = { ...contact, ...values };
    fakeContacts.records[id] = updatedContact;
    return updatedContact;
  },

  destroy(id: string): null {
    delete fakeContacts.records[id];
    return null;
  },
};

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getContacts(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let contacts = await fakeContacts.getAll();
  if (query) {
    contacts = matchSorter(contacts, query, {
      keys: ["first", "last"],
    });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createEmptyContact() {
  const contact = await fakeContacts.create({});
  return contact;
}

export async function getContact(id: string) {
  return fakeContacts.get(id);
}

export async function updateContact(id: string, updates: ContactMutation) {
  const contact = await fakeContacts.get(id);
  if (!contact) {
    throw new Error(`No contact found for ${id}`);
  }
  await fakeContacts.set(id, { ...contact, ...updates });
  return contact;
}

export async function deleteContact(id: string) {
  fakeContacts.destroy(id);
}

[
  {
    id: "localoka",
    title: "Localoka",
    category: "Development Frontend",
    year: "2025",
    imageUrl: "/images/project/localoka-cover.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/localoka",
  },
  {
    id: "sso",
    title: "Imigrasi SSO",
    category: "Development Frontend",
    year: "2025",
    imageUrl: "/images/project/sso-3.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/sso",
  },
  {
    id: "sisbinkar",
    title: "Sistem Pembinaan Karir Imigrasi (SISBINKAR)",
    category: "Development Frontend",
    year: "2025",
    imageUrl: "/images/project/sisbinkar-1.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/sisbinkar",
  },
  {
    id: "apoa",
    title: "APOA Dirjen Imigrasi",
    category: "Development Frontend",
    year: "2024",
    imageUrl: "/images/project/apoa-map.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/apoa",
  },
  {
    id: "delima",
    title: "Delima BRI",
    category: "Development Frontend",
    year: "2023",
    imageUrl: "/images/project/delima-cover.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/delima",
  },
  {
    id: "ism",
    title: "Interactive Static Map",
    category: "Design & Fullstack Development",
    year: "2023",
    imageUrl: "/images/project/ISMHousing.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/ism",
  },
].forEach((project) => {
  fakeContacts.create({
    ...project,
    id: project.id,
  });
});
