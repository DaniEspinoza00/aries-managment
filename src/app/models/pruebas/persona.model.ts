import { User } from "./persona";

export const users: Omit<User, "type">[]= [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Smith" },
    { id: 3, firstName: "Michael", lastName: "Johnson" },
    { id: 4, firstName: "Emily", lastName: "Davis" },
    { id: 5, firstName: "David", lastName: "Wilson" },
    { id: 6, firstName: "Sarah", lastName: "Brown" },
    { id: 7, firstName: "James", lastName: "Miller" },
    { id: 8, firstName: "Olivia", lastName: "Martinez" },
    { id: 9, firstName: "Daniel", lastName: "Anderson" },
    { id: 10, firstName: "Sophia", lastName: "Thomas" },
  ];

  export const enrichedUsers: User[] = users.map(user => ({
    ...user,
    type: "user",
  }));