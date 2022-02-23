import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'src/util/setupSwgger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //swagger setup
  //참고 https://jhyeok.com/nestjs-swagger/
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
