import { atom } from "jotai"

export interface ApplicationFormFlat {
  // Patient Information
  id: string
  fullname: string
  dateOfBirth: string
  memberId: string
  policyNumber: string
  contactNumber: string
  email: string
  address: string
  hospitalName: string
  doctorName: string
  doctorLicense: string
  hospitalAddress: string
  hospitalContactNumber: string
  department: string
  category: string
  dateOfService: string
  diagnosis: string
  totalBilled: string
  reason: string
  certified: string
  authorized: string
}

export const userApplicationStore = atom<ApplicationFormFlat>({
  id: "",
  fullname: "",
  dateOfBirth: "",
  memberId: "",
  policyNumber: "",
  contactNumber: "",
  email: "",
  address: "",
  hospitalName: "",
  doctorName: "",
  doctorLicense: "",
  hospitalAddress: "",
  hospitalContactNumber: "",
  department: "",
  category: "",
  dateOfService: "",
  diagnosis: "",
  totalBilled: "",
  reason: "",
  certified: "",
  authorized: "",
});