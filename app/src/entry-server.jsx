import { renderToString } from 'react-dom/server';
import { Direction } from 'radix-ui';
import App from './App';
export function render() {
  return renderToString(<Direction.Provider dir="rtl"><App /></Direction.Provider>);
}
