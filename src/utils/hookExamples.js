import { UseStateExample } from '../hooks/useState/useState';
import UseEffectExample from '../hooks/useEffect/useEffect';
import UseContextExample from '../hooks/useContext/useContext';

export const HOOKS = [{
  title: "I hereby declare useState!",
  component: UseStateExample
}, {
  title: "You used useEffect. It was Super Effective!",
  component: UseEffectExample
}, {
  title: "useContext rocks.",
  component: UseContextExample
}];
