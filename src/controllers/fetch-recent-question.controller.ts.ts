import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('/questions')
@UseGuards(AuthGuard('jwt')) // Usando a estratégia JWT
export class FetchRecentQuestionsController {
    constructor(private prisma: PrismaService) {}

    @Get()
    async handle() {
        const questions = await this.prisma.question.findMany({
            orderBy: {
                cretedAt: 'desc'
            }
        })

        return { questions }
    }
}