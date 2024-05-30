import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Container from '../../src/components/Container';
import { useSession } from '../../src/providers/SessionProvider';
import getNotifications from '../../src/actions/getNotifications';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const { session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
    (async function() {
      const response = await getNotifications(session.token);
      const data = await response.json();
      setNotifications(data);
    })();
  }, [session]);

  return (
    <Container>
      {notifications.length === 0 && (
        <Text>All caught up</Text>
      )}
      {notifications.map(notification => (
        <View key={notification.uuid}>
          {notification.toString()}
        </View>
      ))}
    </Container>
  );
}
