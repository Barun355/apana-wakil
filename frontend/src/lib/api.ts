import { get, post, put } from "./network";
import { APPOINTMENT_STATUS, AppointmentsType, CaseType, LawyerDetailsType, Role, UserType } from "./types";

interface SignInInputType {
  role: string;
  email: string;
  password: string;
}

interface SignUpInputType {
  role: Role;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone_number?: string;
  address?: string;
  addhar_number?: string;
  profile?: string;
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

const BACKEND_URL: string =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const signIn = async (userInfo: SignInInputType) => {
  try {
    const response = await post(`${BACKEND_URL}/api/v1/auth/signin`, userInfo);
    localStorage.setItem("token", `Bearer ${response.token}`);
    const data = response.user;
    return [data, null] as [UserType, null];
  } catch (err: any) {
    return [null, err] as [null, Error];
  }
};

export const signUp = async (userInfo: SignUpInputType) => {
  console.log(`SignUp auth: backendurl ${BACKEND_URL}`);
  try {
    const response = await post(`${BACKEND_URL}/api/v1/auth/signup`, userInfo);
    localStorage.setItem("token", `Bearer ${response.token}`);
    const data = response.user;
    return [data, null] as [UserType, null];
  } catch (err: any) {
    return [null, err] as [null, Error];
  }
};

export const gLoginReq = async ({
  accessToken,
  role,
}: {
  accessToken: string;
  role: Role;
}) => {
  try {
    const response = await post(`${BACKEND_URL}/api/v1/auth/gLogin`, {
      accessToken,
      role,
    });
    localStorage.setItem("token", `Bearer ${response.token}`);
    const data = response.user;
    return [data, null] as [UserType, null];
  } catch (err: any) {
    return [null, err] as [null, Error];
  }
};

export const getAppointments = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Unauthorized Access");
    }
    const data = await get(`${BACKEND_URL}/api/v1/appointment`, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
    return [data, null] as [AppointmentsType[], null];
  } catch (error) {
    return [null, error] as [null, Error];
  }
};

// layerid, status-CANCEL, appointment_date: client_id, description, status-CANCEL

export const updateAppointments = async ({
  role,
  id,
  action,
  appointment_date,
  description,
}: {
  id: string;
  role: Role;
  action?: APPOINTMENT_STATUS;
  appointment_date?: Date;
  description?: string;
}) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Unauthorized Access");
    }

    console.log(role);

    const body =
      role === Role.CLIENT
        ? {
            id,
            description,
            status: action,
            date: appointment_date,
          }
        : {
            id,
            status: action,
            date: appointment_date,
          };

    console.log(body);
    const data = await put(`${BACKEND_URL}/api/v1/appointment`, body, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
    return [data, null] as [AppointmentsType[], null];
  } catch (error) {
    return [null, error] as [null, Error];
  }
};

export const createCase = async ({ title, description, status, client, Hearings, Timeline }: CaseType) => {
  console.log("test");
  const body = {
    title,
    description,
    status,
    client,
    Hearings,
    Timeline
  }
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Unauthorized Access");
    }
    const data = await post(`${BACKEND_URL}/api/v1/cases`, body, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
    return [data, null] as [AppointmentsType[], null];
  } catch (error) {
    return [null, error] as [null, Error];
  }
};


export const getLawyers = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Unauthorized Access");
    }
    const data = await get(`${BACKEND_URL}/api/v1/lawyers`, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
    return [data, null] as [LawyerDetailsType[], null];
  } catch (error) {
    return [null, error] as [null, Error];
  }
};

export const getLawyerById = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Unauthorized Access");
    }
    const data = await get(`${BACKEND_URL}/api/v1/lawyers/:id`, {
      headers: {
        Authorization: token,
      },
    });
    // console.log(data);
    return [data, null] as [LawyerDetailsType[], null];
  } catch (error) {
    return [null, error] as [null, Error];
  }
};