import { beforeEach, describe, it,jest } from "@jest/globals";
import { prisma } from "../../../src/application/database";
import { UserService } from "../../../src/service/user-service"

jest.mock("../../../src/application/database",() => ({
  prisma: {
    user: {
      create: jest.fn(),
    }
  },
}))

describe("UserService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create new user", async () => {
    const mockUser = {
      username: "luthfi",
      role: "admin",
      email: "luthfi@gmail.com",
      password: "123"
    };
    // prisma.user.create sekarang adalah jest.fn()
    (prisma.user.create as jest.Mock<any>).mockResolvedValue(mockUser);

    const user = await UserService.register(mockUser);

    expect(user).toEqual(mockUser);
    expect(prisma.user.create).toHaveBeenCalledWith({ data: mockUser });
  })
})