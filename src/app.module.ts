import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from './env'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      // Aplicação não roda sem o env
      validate: (env) => envSchema.parse(env), // Parse faz um throw caso tenha algum problema de validação
      isGlobal: true
    })
  ],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
