import app from './app';
import { MainController } from './controllers';

app.listen(3000, async () => {
  MainController.init();
  console.log('listening on 3000 port');
});
