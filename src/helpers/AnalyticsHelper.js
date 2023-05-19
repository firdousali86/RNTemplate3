import analytics from '@react-native-firebase/analytics';

class AnalyticsHelper {
  logTest = () => {
    analytics().logEvent('basket', {
      id: 3745092,
      item: 'mens grey t-shirt',
      description: ['round neck', 'long sleeved'],
      size: 'L',
    });
  };

  logEvent = (name, data) => {
    analytics().logEvent(name, data);
  };
}

export default new AnalyticsHelper();
