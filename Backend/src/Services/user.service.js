import prisma from "../Config/prisma.config.js";

export const getUserBy = async (email) => {
  return await prisma.user.findUnique({ where: { email} });
};
export const createUser = async (userData) => {
  console.log('userData', userData)
  return await prisma.user.create({
    data: { 
      email : userData.email,
      password : userData.password,
      firstName : userData.firstName,
      lastName : userData.lastName,
      phoneNumber : userData.phoneNumber,
      address : userData.address,
      // role : userData.role || 'USER',
    },
    omit: { password: true },
});
};

export async function getMe(id) {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}

