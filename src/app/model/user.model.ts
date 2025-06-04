export interface User {
  id(id: any): unknown;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
}
