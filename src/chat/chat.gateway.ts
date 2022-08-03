import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AuthService } from '../auth/auth.service';
import { UnauthorizedException } from '@nestjs/common';

@WebSocketGateway({
  pingTimeout: 36000,
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly authService: AuthService) {}
  @SubscribeMessage('join')
  async joinReview(data: { token: string }) {
    const userId = await this.authService.getVerifiedUserId(data.token);
    if (!userId) {
      throw new UnauthorizedException({ message: 'this user unauthorized' });
    }
    console.log(userId);
  }
}
