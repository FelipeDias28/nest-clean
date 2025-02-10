import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('/questions')
@UseGuards(AuthGuard('jwt')) // Usando a estratégia JWT
export class CreateQuestionController {
    constructor(private prisma: PrismaService) {}

    @Post()
    async handle() {
        return 'Ok'
    }
}