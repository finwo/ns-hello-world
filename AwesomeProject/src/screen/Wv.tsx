import { WebView } from 'react-native-webview';

function Wv(props: any): JSX.Element {
  return <WebView block style={{ flex: 1 }} source={{ uri: props.uri || 'https://google.com' }}/>;
}

Wv.options = {
  topBar: {
    title: {
      text: 'WebView',
      color: 'black',
    },
    background: {
      color: '#fff',
    }
  },
};

export default Wv;

export const nav = {
  component: {
    name: Wv.name,
  },
};
