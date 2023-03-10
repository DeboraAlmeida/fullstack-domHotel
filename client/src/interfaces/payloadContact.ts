export default interface PayloadContact {
  name: string
  email: string
  comment: string
  subject: string
  createdAt: Date
  status: 0 | 1 | 2
}