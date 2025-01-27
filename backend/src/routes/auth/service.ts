import { UserType } from "../../types/types";
import prisma from "../../lib/prisma";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "wakeel";

export const signup = async (
  payload: UserType
) => {
  try {
    let createdUser;
    const checkUser = await prisma.users.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (checkUser?.id) {
      throw new Error("Email Already exists");
    }

    if (payload.role === "LAWYER") {
      // Create the user and lawyer if the role is LAWYER
      createdUser = await prisma.users.create({
        data: {
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName,
          role: payload.role,
          password: payload.password, // Make sure to hash the password before saving it
          address: "",
          phone_number: "",
          profile: "",
          Lawyer: {
            create: {
              profile_description: "",
              yoe: 0, // Years of experience (you can adjust it)
              specialization: "",
              consultationFee: 0,
              license_number: "",
              bar_association_membership: "",
              website: "",
            },
          },
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          phone_number: true,
          createdAt: true,
          updatedAt: true,
          Lawyer: true, // Include lawyer related data if needed
        },
      });
    } else {
      // Create a normal user if the role is CLIENT
      createdUser = await prisma.users.create({
        data: {
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName,
          role: payload.role,
          password: payload.password, // Make sure to hash the password before saving it
          address: "",
          phone_number: "",
          profile: "",
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          phone_number: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }

    const token = sign(
      {
        id: `${
          payload.role == "LAWYER"
            ? (createdUser as any).Lawyer.id
            : createdUser.id
        }`,
        role: createdUser.role,
      },
      JWT_SECRET!
    );
    return { token, user: createdUser };
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const signin = async (
  payload: Pick<UserType, "email" | "password" | "role">
) => {
  try {
    let checkUser;
    if (payload.role === "LAWYER") {
      // Create the user and lawyer if the role is LAWYER
      checkUser = await prisma.users.findUnique({
        where: {
          email: payload.email,
          password: payload.password,
          role: payload.role,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          phone_number: true,
          createdAt: true,
          updatedAt: true,
          Lawyer: true, // Include lawyer related data if needed
        },
      });
    } else {
      // Create a normal user if the role is CLIENT
      checkUser = await prisma.users.findUnique({
        where: {
          email: payload.email,
          password: payload.password,
          role: payload.role, // Make sure to hash the password before saving it
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          phone_number: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }

    if (!checkUser?.id) {
      throw new Error("invalid credentials");
    }
    const token = sign(
      {
        id: `${
          payload.role == "LAWYER" ? (checkUser as any).Lawyer.id : checkUser.id
        }`,
        role: checkUser.role,
      },
      JWT_SECRET!
    );
    return { token, user: checkUser };
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const updateProfile = async (payload: UserType) => {
  try {
    // Find the user by ID
    const user = await prisma.users.findUnique({
      where: { id: payload.id },
      include: { Lawyer: true }, // Include Lawyer details to handle role-specific updates
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Update user fields
    const updatedUser = await prisma.users.update({
      where: { id: payload.id },
      data: {
        firstName: payload.firstName || user.firstName,
        lastName: payload.lastName || user.lastName,
        email: payload.email || user.email,
        phone_number: payload.phone_number || user.phone_number,
        address: payload.address || user.address,
        profile: payload.profile || user.profile,
        // Handle lawyer-specific fields if the user is a lawyer
        Lawyer:
          user.role === "LAWYER"
            ? {
                upsert: {
                  create: {
                    profile_description:
                      payload.Lawyer?.profile_description ||
                      user.Lawyer?.profile_description ||
                      "",
                    consultationFee:
                      payload.Lawyer?.consultationFee ||
                      user.Lawyer?.consultationFee ||
                      0,
                    yoe: payload.Lawyer?.yoe || user.Lawyer?.yoe || 0,
                    specialization:
                      payload.Lawyer?.specialization ||
                      user.Lawyer?.specialization ||
                      "",
                    license_number:
                      payload.Lawyer?.license_number ||
                      user.Lawyer?.license_number ||
                      "",
                    bar_association_membership:
                      payload.Lawyer?.bar_association_membership ||
                      user.Lawyer?.bar_association_membership ||
                      "",
                    website:
                      payload.Lawyer?.website || user.Lawyer?.website || "",
                  },
                  update: {
                    profile_description:
                      payload.Lawyer?.profile_description ||
                      user.Lawyer?.profile_description,
                    consultationFee:
                      payload.Lawyer?.consultationFee ||
                      user.Lawyer?.consultationFee,
                    yoe: payload.Lawyer?.yoe || user.Lawyer?.yoe,
                    specialization:
                      payload.Lawyer?.specialization ||
                      user.Lawyer?.specialization,
                    license_number:
                      payload.Lawyer?.license_number ||
                      user.Lawyer?.license_number,
                    bar_association_membership:
                      payload.Lawyer?.bar_association_membership ||
                      user.Lawyer?.bar_association_membership,
                    website: payload.Lawyer?.website || user.Lawyer?.website,
                  },
                },
              }
            : undefined,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        phone_number: true,
        address: true,
        profile: true,
        createdAt: true,
        updatedAt: true,
        Lawyer: user.role === "LAWYER" ? true : false, // Include lawyer details if the user is a lawyer
      },
    });

    return updatedUser;
  } catch (err: any) {
    console.error(err);
    throw new Error(err.message || "Failed to update user");
  }
};

export const gLogin = async (
  payload: Pick<UserType, "firstName" | "role" | "email">
) => {
  try {
    const password = "";
    let user;
    const existingUser = await prisma.users.findUnique({
      where: {
        email: payload.email,
      },
      include: {
        Lawyer: payload.role === "LAWYER", // Include Lawyer data if role is LAWYER
      },
    });

    if (existingUser) {
      if (payload.role === "LAWYER" && !existingUser.Lawyer) {
        throw new Error("User exists but is not registered as a Lawyer.");
      }
      // Return existing user
      const token = sign(
        { id: existingUser.id, role: existingUser.role },
        JWT_SECRET!
      );
      return { token, user };
    }

    // If user does not exist, create one
    if (payload.role === "LAWYER") {
      // Create user with Lawyer details
      user = await prisma.users.create({
        data: {
          email: payload.email,
          firstName: payload.firstName,
          lastName: "",
          role: payload.role,
          password: password, // Ensure password is hashed before saving
          address: "",
          phone_number: "",
          profile: "",
          Lawyer: {
            create: {
              profile_description: "",
              yoe: 0, // Default years of experience
              consultationFee: 0,
              specialization: "",
              license_number: "",
              bar_association_membership: "",
              website: "",
            },
          },
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          phone_number: true,
          createdAt: true,
          updatedAt: true,
          Lawyer: true, // Include lawyer related data if needed
        },
      });
    } else {
      // Create a normal client user
      user = await prisma.users.create({
        data: {
          email: payload.email,
          firstName: payload.firstName,
          lastName: "",
          role: payload.role,
          password: password, // Ensure password is hashed before saving
          address: "",
          phone_number: "",
          profile: "",
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          phone_number: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }

    // Optionally generate a token or return the user
    const token = sign({ id: user.id, role: user.role }, JWT_SECRET!);
    return { token, user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
