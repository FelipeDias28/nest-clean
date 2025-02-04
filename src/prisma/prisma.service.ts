import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        // Chama o constructor do prisma client
        super({
            log: ['warn', 'error'] // Mostra os logs quando acontecer algum desses dois
        })
    }

    // Quando o módulo iniciar
    onModuleInit() {
        return this.$connect()
    }

    // Quando o modulo finalizar
    onModuleDestroy() {
        return this.$disconnect()
    }
}