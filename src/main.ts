import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //change path if you run in docker
  const swaggerDescription = await fs.readFileSync(
    join(__dirname, '..', 'description.markdown'),
  );
  const config = new DocumentBuilder()
    .setTitle('Okten-Nest')
    .setDescription(swaggerDescription.toString())
    .setVersion('1.0')
    .addTag('Pokten')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
