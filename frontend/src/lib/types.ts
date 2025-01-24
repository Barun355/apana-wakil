export interface ClientRequest {
  id: number;
  clientName: string;
  caseTitle: string;
  submittedDate: string;
  status?: string;
  nextHearingDate?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  time: string;
  rating: number;
  image: string;
  serviceTag: string;
}


export enum Role {
  LAWYER = "LAWYER",
  CLIENT = "CLIENT",
}

export interface UserType {
  id: string;
  role?: Role;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone_number?: string;
  address?: string;
  addhar_number?: string;
  profile?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Lawyer?: {
    profile_description?: string;
    yoe?: number;
    specialization?: string;
    license_number?: string;
    bar_association_membership?: string;
    consultationFee?: number;
    website?: string;
  };
}