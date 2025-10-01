import { beforeEach, describe, it, jest } from "@jest/globals";
import { prisma } from "../../../src/application/database";
import { ProductService } from "../../../src/service/product-service"

jest.mock("../../../src/application/database",() => ({
  prisma: {
    product: {
      create: jest.fn(),
    },
  },
}))

describe("Product Service", () => {
    beforeEach(() => {
    jest.clearAllMocks();
  });

    it("it should create new product", async () => {
        const mockData = {
            status: "active",
            name_product: "Sneakers XYZ",
            price: 499000,
            stock: 120,
            sizes: ["38", "39", "40", "41", "42"],
            image: "https://example.com/images/sneakers-xyz.jpg",
            content: [
                "100% Original",
                "Material premium",
                "Garansi 1 tahun"
            ],
            product_description: "Sneakers XYZ didesain untuk kenyamanan sehari-hari dengan material berkualitas tinggi dan tampilan modern.",
            delivery_description: "Pengiriman dilakukan dalam 1-3 hari kerja menggunakan ekspedisi terpercaya."
        };
        (prisma.product.create as jest.Mock<any>).mockResolvedValue(mockData)

        const data = await ProductService.createProduct(mockData)

        expect(data).toEqual(mockData)

    })
})