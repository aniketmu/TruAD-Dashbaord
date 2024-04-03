import { StreamChat, User } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const userId = 'spring-firefly-5';
const userName = 'Aniket';

const user= {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};

const apiKey = 'dz5f4d5kzrue';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3ByaW5nLWZpcmVmbHktNSIsImV4cCI6MTcxMTcwNzIzNH0.kjT_mEbYwspLHjj7WETuFSKisO2ow13Z57sQE0ppcKg';

const chatClient = new StreamChat(apiKey);
chatClient.connectUser(user, userToken);

const channel = chatClient.channel('messaging', 'new_id2', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: [userId, 'weathered-bush-8'],
});

const Chatter = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        {/* <ChannelHeader /> */}
        <MessageList />
        <div style={{position:'fixed',bottom:'0'}}>
        <MessageInput  />
        </div>
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default Chatter;