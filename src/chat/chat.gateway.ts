import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors:{
    origin: '*',
  }
})
export class ChatGateway {
  @WebSocketServer() server:Server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message:string,@ConnectedSocket() client:Socket): void {
    this.server.emit('message',message);
  }
}