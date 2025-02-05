import { Body, ConflictException, Controller, HttpCode, Post } from "@nestjs/common";
import { hash } from "bcryptjs";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('/accounts')
export class CreateAccountController {
    constructor(private prisma: PrismaService) {}

    @Post()
    @HttpCode(201)
    async handle(@Body() body: any) {
        const { name, email, password } = body

        const userWithSameEmail = await this.prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userWithSameEmail) {
            throw new ConflictException('User with the same e-mail address already exists.')
        }

        // Faz o hash 8 vezes, tornando a senha mais segura
        const hashedPassword = await hash(password, 8)

        await this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
    }
}